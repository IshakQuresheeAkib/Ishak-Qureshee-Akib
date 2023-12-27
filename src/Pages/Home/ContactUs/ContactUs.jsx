import Title from "../../Shared/Title/Title";
import { motion } from "framer-motion"


const ContactUs = () => {
    return (
        <section class="pt-36" id="contactUs">
  <motion.div initial={{y:-150,opacity:0,scale:0.5}} animate={{y:1,opacity:1,scale:1}} transition={{duration: 1}}
   class="px-4 mx-auto max-w-screen-md">
      <div className="w-fit mx-auto mb-5"><Title>Contact Us</Title></div>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a betar feature? Need details about us? Let us know.</p>
      <form action="#" class="space-y-8">
          <div className="">
              <label for="email" class="block mb-2 text-lg mt-10 font-medium text-white/80 px-1">Your email</label>
              <input type="email" id="email" class="border-b bg-transparent text-sm focus:ring-primary-500 focus:border-primary-500 block w-full py-2.5 px-1" placeholder="name@gmail.com" required/>
          </div>
          <div className="">
              <label for="email" class="block mb-2 text-lg mt-10 font-medium text-white/80 px-1">Subject</label>
              <input type="email" id="email" class="border-b bg-transparent text-sm focus:ring-primary-500 focus:border-primary-500 block w-full py-2.5 px-1" placeholder="Subject" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-lg mt-10 font-medium text-white/80 px-1">Your message</label>
              <textarea id="message" rows="6" class="border-b bg-transparent text-sm focus:ring-primary-500 focus:border-primary-500 block w-full py-2.5 px-1" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="btn btn-outline">Send message</button>
      </form>
  </motion.div>
</section>
    )}
export default ContactUs;