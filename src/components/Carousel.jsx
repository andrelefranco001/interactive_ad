import { useState, useEffect } from "react";
import { sampleProducts } from "../data/products";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Carousel({ tileId, onBack, onAnimateTiles }) {
  const products = sampleProducts[tileId]?.children || [];
  const [currentIndex, setCurrentIndex] = useState(0); // Índice del producto actual
  const [isAnimating, setIsAnimating] = useState(false); // Controla la animación

  // Precarga la imagen del producto actual
  useEffect(() => {
    const img = new Image();
    img.src = products[currentIndex]?.images;
  }, [currentIndex]);

  // Animación automática del carrusel
  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex + 1 === products.length) {
            clearInterval(interval);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 2000);

      return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }
  }, [products.length]);

  // Avanza al siguiente producto
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Retrocede al producto anterior
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Regresa al estado anterior y anima las Tiles
  const handleBackClick = () => {
    if (onAnimateTiles) {
      onAnimateTiles();
    }
    onBack();
  };

  return (
    <div className="mt-4 w-full max-w-md mx-auto">
      {/* Título del carrusel */}
      <h3 className="font-bold text-center mb-10 font-sans font-mono text-2xl">
        Products for {sampleProducts[tileId]?.name || "Unknown Tile"}
      </h3>

      {/* Contenido del carrusel */}
      {products.length > 0 ? (
        <div className="relative">
          {/* Imagen del producto actual */}
          <div
            className={`transition-transform duration-200 ease-in transform ${
              isAnimating ? "scale-95" : "scale-100"
            }`}
          >
            <img
              src={products[currentIndex].images}
              alt={products[currentIndex].name}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded mb-4"
            />
          </div>

          {/* Detalles del producto */}
          <div className="text-center">
            <h4 className="font-semibold">{products[currentIndex].name}</h4>
            <h4 className="font-semibold text-4xl text-black-500 ">
              {products[currentIndex].price}
            </h4>
            <p className="text-gray-500">{products[currentIndex].sku}</p>
          </div>

          {/* Controles del carrusel */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-red-400 text-white w-10 h-10 rounded-full shadow flex items-center justify-center cursor-pointer"
          >
            <ArrowBackIcon className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-400 text-white w-10 h-10 rounded-full shadow flex items-center justify-center cursor-pointer"
          >
            <ArrowForwardIcon className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <div className="text-red-600 text-center">No products available</div>
      )}

      {/* Botón para regresar */}
      <button
        onClick={handleBackClick}
        className="mt-9 bg-red-400 text-white px-4 py-2 rounded shadow hover:bg-transparent hover:text-red-500 hover:border-red-500 border flex items-center justify-center mx-auto cursor-pointer"
      >
        Back to Checklist
      </button>
    </div>
  );
}
