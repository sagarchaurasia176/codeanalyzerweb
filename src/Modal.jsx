import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // When modal opens, add a class to prevent scrolling on the body
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    // When modal closes, restore scrolling
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {/* Watch Demo Button */}
      <button
        onClick={openModal}
        className="bg-transparent cursor-pointer border-2 border-blue-500 hover:bg-blue-500/10 transition-colors text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
      >
        <FaPlay size={16} />
        Watch Demo
      </button>

      {/* Modal Overlay with Backdrop Blur */}
      {isOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="bg-gray-800 rounded-lg p-4 w-full max-w-4xl relative z-10">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 cursor-pointer right-2 text-gray-800 bg-white hover:bg-gray-200 transition-colors p-1 rounded-full sm:p-1.5 md:p-2"
            >
              <FaTimes size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Video Player */}
            <div className="aspect-video w-full bg-black rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/F7EUs_qMzJE"
                className="w-full h-full"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
