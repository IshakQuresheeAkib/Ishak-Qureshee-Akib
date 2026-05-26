"use client";

import { useRef, FormEvent, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { RiSendPlaneFill } from "react-icons/ri";
import { toast } from "react-toastify";
import Title from "@/components/ui/Title/Title";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { getEmailJSConfig, ANIMATION_DURATION } from "@/lib/constants";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ContactUs(): React.ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [shouldLoadAnimation, setShouldLoadAnimation] = useState<boolean>(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadAnimation(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadAnimation) return;

    const controller = new AbortController();

    const fetchLottie = async (): Promise<void> => {
      try {
        const response = await fetch("/lottie/contactlottie.json", {
          signal: controller.signal,  // ← Attach abort signal
        });
        if (!response.ok) throw new Error("Failed to fetch animation");
        const data = await response.json();
        
        // Only set state if not aborted
        if (!controller.signal.aborted) {
          setAnimationData(data);
        }
      } catch (error) {
        // Ignore AbortError (triggered on unmount)
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
        console.error("Animation load failed:", error);
      }
    };

    fetchLottie();
    // Cleanup: abort fetch if component unmounts
    return () => {
      controller.abort();
    };
  }, [shouldLoadAnimation]);

  const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    const emailConfig = getEmailJSConfig();

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      toast.error("Email configuration is missing. Please contact the administrator.");
      setIsSubmitting(false);
      return;
    }

    try {
      const { default: emailjs } = await import("@emailjs/browser");
      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
      );

      if (result.text === "OK") {
        formRef.current.reset();
        toast.success("Email sent successfully!");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      toast.error(`Failed to send email: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="scroll-section pt-16 sm:pt-24 lg:pt-40 xl:pt-52 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="contactUs"
    >
      <div className="w-fit mx-auto mb-8 sm:mb-12 lg:mb-16">
        <Title>Contact Me</Title>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center max-w-6xl mx-auto gap-6 lg:gap-8">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION }}
          viewport={{ once: true }}
          className="text-white flex-1 w-full max-w-sm sm:max-w-md lg:max-w-xl"
        >
          {shouldLoadAnimation && animationData ? (
            <Lottie animationData={animationData} loop={true} className="w-full max-w-xs sm:max-w-sm lg:max-w-xl mx-auto" />
          ) : <div className="w-full max-w-xs sm:max-w-sm lg:max-w-xl h-64 animate-pulse bg-white/5 rounded-lg" />
          }
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION }}
          viewport={{ once: true }}
          className="flex-1 md:w-3/4 w-full"
        >
          <form className="space-y-5 sm:space-y-6 lg:space-y-8" ref={formRef} onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="from_name"
                className="block mb-1.5 sm:mb-2 text-base sm:text-lg 3xl:text-xl mt-4 sm:mt-6 lg:mt-10 font-medium text-white px-1"
              >
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="border-b text-white/80 border-white/90 bg-transparent text-sm sm:text-base 3xl:text-lg focus:ring-primary-500 focus:border-primary-500 block w-full py-2 sm:py-2.5 px-1 outline-none"
                placeholder="Name"
                required
              />
            </div>
            <div className="text-white/80">
              <label
                htmlFor="from_email"
                className="block mb-1.5 sm:mb-2 text-base sm:text-lg 3xl:text-xl mt-4 sm:mt-6 lg:mt-10 font-medium text-white px-1"
              >
                Your email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                className="border-b border-white/90 bg-transparent text-sm sm:text-base 3xl:text-lg block w-full py-2 sm:py-2.5 px-1 outline-none"
                placeholder="name@gmail.com"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-1.5 sm:mb-2 text-base sm:text-lg 3xl:text-xl mt-4 sm:mt-6 lg:mt-10 font-medium text-white px-1"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="border-b border-white/90 bg-transparent text-sm sm:text-base 3xl:text-lg focus:ring-primary-500 text-white/80 focus:border-primary-500 block w-full py-2 sm:py-2.5 px-1 outline-none resize-none"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <CustomButton
              type="submit"
              variant="primary"
              before={<RiSendPlaneFill className="text-lg sm:text-xl 3xl:text-2xl" aria-hidden="true" />}
              disabled={isSubmitting}
              content={isSubmitting ? "Sending..." : "Send"}
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
}