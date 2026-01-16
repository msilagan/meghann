import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator() {
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
      className="relative
                md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2
                flex flex-col items-center gap-2
                text-gray-400/75 dark:text-gray-300
                hover:text-cyan-400/50
                transition"
    >
      {/* Mouse */}
      <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center">
        <span className="w-1/4 h-2 bg-current rounded-full mt-2 animate-bounce" />
      </div>
    </button>
  );
}
