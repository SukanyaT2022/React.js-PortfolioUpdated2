import { useState } from "react";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
];

export default function PopupSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openModal = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="p-6">
      {/* Gallery */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => openModal(index)}
            className="cursor-pointer rounded-lg hover:scale-105 transition"
          />
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✕
          </button>

          {/* Slider */}
          <div className="relative w-[90%] max-w-3xl">
            <img
              src={images[current]}
              alt=""
              className="w-full h-[400px] object-cover rounded-lg"
            />

            {/* Prev */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
            >
              ◀
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}