import { useEffect, useState } from "react";

export default function Tile({
  id,
  label,
  images,
  skus,
  isCarouselActive,
  onClick,
  onCompleteCycle,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (isCarouselActive) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex === images.length) {
            onCompleteCycle(id); // Notifica al padre que el ciclo se completó
            return 0; // Regresa a la primera imagen
          }
          return nextIndex;
        });
      }, 2000);
    } else {
      setCurrentImageIndex(0); // Reinicia a la primera imagen cuando el checkbox está desmarcado
    }

    return () => {
      clearInterval(interval);
    };
  }, [isCarouselActive, images.length, onCompleteCycle, id]);

  return (
    <div
      className="flex flex-col items-center justify-center bg-white p-2 cursor-pointer text-center rounded shadow hover:bg-green-100 transition duration-200 ease-in-out transform hover:scale-105 hover:border-2 border-green-200"
      onClick={() => onClick(id)}
    >
      <div className="font-semibold mb-5">{label}</div>
      <img
        src={images[currentImageIndex]}
        alt={label}
        className="w-full h-[110px] object-cover mb-2 rounded"
      />
      <div className="mt-2">{skus[currentImageIndex]}</div>
    </div>
  );
}
