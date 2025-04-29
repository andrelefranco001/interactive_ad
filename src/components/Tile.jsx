import { useState, useEffect } from "react";

export default function Tile({
  id,
  label,
  images,
  isCarouselActive,
  onClick,
  onCompleteCycle,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Índice de la imagen actual

  // Maneja la animación del carrusel
  useEffect(() => {
    let interval;

    if (isCarouselActive) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          if (nextIndex === 0 && onCompleteCycle) {
            onCompleteCycle(id); // Notifica cuando se completa un ciclo
          }
          return nextIndex;
        });
      }, 2000); // Cambia la imagen cada 2 segundos
    } else {
      setCurrentImageIndex(0); // Reinicia la imagen si el carrusel no está activo
    }

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar o cambiar
    };
  }, [isCarouselActive, images.length, id, onCompleteCycle]);

  return (
    <div
      className="flex flex-col items-center justify-center bg-white p-2 cursor-pointer text-center rounded shadow hover:bg-green-100 transition duration-200 ease-in-out transform hover:scale-105 hover:border-2 border-green-200"
      onClick={() => onClick(id)} // Maneja el clic en la Tile
    >
      <div className="font-semibold mb-5">{label}</div>
      <img
        src={images[currentImageIndex]} // Muestra la imagen actual
        alt={label}
        className="w-full h-[110px] object-contain mb-2 rounded"
      />
    </div>
  );
}
