import Image from "next/image";
// @ts-expect-error - No type declarations for css files
import "./aboutImage.css";
import { EXTERNAL_URLS } from "@/lib/constants";


export default function AboutImage(): React.ReactElement {
  return (
    <div className="w-full flex justify-center">
      <div className="about-image-wrapper">
        <Image
          className="about-image"
          src={EXTERNAL_URLS.aboutImage}
          alt="Ishak Qureshee Akib"
          width={400}
          height={400}
          sizes="(max-width: 480px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
          priority
        />
      </div>
    </div>
  );
}
