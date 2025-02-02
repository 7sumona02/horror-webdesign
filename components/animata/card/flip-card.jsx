import { cn } from "@/lib/utils";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  linkedinUrl, // Add props for customizable URLs
  githubUrl,
  ...props
}) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div className={cn("group h-56 w-56 [perspective:1000px]", className)} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0],
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <img
            src={image}
            alt="image"
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
          <div className="absolute bottom-9 left-4 text-xl font-bold text-white">{title}</div>
          <div className="absolute bottom-4 left-4 text-sm font-bold text-white">{subtitle}</div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]",
            self[1],
          )}
        >
          <div className="flex justify-center items-center min-h-full gap-4 text-black font-bold">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <div className="bg-[#ff7940] p-4 rounded-full">
                <FiLinkedin />
              </div>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <div className="bg-[#ff7940] p-4 rounded-full">
                <FiGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
