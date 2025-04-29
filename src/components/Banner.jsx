import { useEffect, useState } from "react";
import Tile from "./Tile";
import Carousel from "./Carousel";
import logo from "../assets/w_logo.png";
import shoplogo from "../assets/w_shop_list.png";
import { sampleProducts } from "../data/products";

// Datos de las Tiles, con nombres e imágenes de las categorías
const tileData = [
  { id: 1, label: sampleProducts[1].name, images: sampleProducts[1].images },
  { id: 2, label: sampleProducts[2].name, images: sampleProducts[2].images },
  { id: 3, label: sampleProducts[3].name, images: sampleProducts[3].images },
  { id: 4, label: sampleProducts[4].name, images: sampleProducts[4].images },
];

export default function Banner() {
  // Estados principales
  const [showCheck, setShowCheck] = useState(true); // Indicador de carga
  const [showTiles, setShowTiles] = useState(false); // Muestra las Tiles
  const [activeCarousel, setActiveCarousel] = useState(null); // Carrusel activo
  const [isCarouselActive, setIsCarouselActive] = useState(false); // Estado del carrusel
  const [isImagesLoaded, setIsImagesLoaded] = useState(false); // Imágenes precargadas
  const [currentTileIndex, setCurrentTileIndex] = useState(-1); // Índice de la Tile animada

  // Maneja el checkbox para activar/desactivar la animación
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setIsCarouselActive(true);
      startChainAnimation();
    } else {
      setIsCarouselActive(false);
      setCurrentTileIndex(-1);
    }
  };

  // Precarga de imágenes
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = tileData.flatMap((tile) =>
        tile.images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );
      await Promise.all(imagePromises);
      setIsImagesLoaded(true);
    };
    preloadImages();
  }, []);

  // Muestra las Tiles después de cargar las imágenes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheck(false);
      setShowTiles(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isImagesLoaded]);

  // Inicia la animación en cadena de las Tiles
  const startChainAnimation = () => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentTileIndex(index);
      index++;
      if (index >= tileData.length) {
        clearInterval(interval);
        setTimeout(() => {
          const randomTile = Math.floor(Math.random() * tileData.length) + 1;
          setActiveCarousel(randomTile);
          setShowTiles(false);
        }, 1000);
      }
    }, 1000);
  };

  // Maneja el clic en una Tile para activar su carrusel
  const handleTileClick = (id) => {
    setActiveCarousel(id);
    setShowTiles(false);
  };

  // Anima las Tiles en secuencia
  const animateTiles = () => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentTileIndex(index);
      index++;
      if (index > tileData.length) {
        clearInterval(interval);
        setCurrentTileIndex(-1);
      }
    }, 1000);
  };

  // Regresa del carrusel a las Tiles
  const handleBack = () => {
    setActiveCarousel(null);
    setShowTiles(true);
    setIsCarouselActive(false);
    setCurrentTileIndex(-1);
  };

  return (
    <div className="border border-gray-300 w-[300px] h-[600px] p-0 overflow-hidden rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center">
      {/* Indicador de carga */}
      {showCheck && (
        <div className="text-4xl text-green-600 items-center justify-center flex flex-col">
          <img src={logo} alt="" />
          <div className="w-8 h-8 border-4 border-red-300 border-t-transparent rounded-full animate-spin mt-4"></div>
        </div>
      )}

      {/* Tiles */}
      {showTiles && (
        <>
          <img src={shoplogo} alt="" className="w-42 h-auto my-4" />
          <div className="tiles font-sans font-mono">
            {tileData.map((tile, index) => (
              <Tile
                key={tile.id}
                id={tile.id}
                label={tile.label}
                images={
                  currentTileIndex >= index
                    ? [tile.images[1]] // Imagen activa
                    : [tile.images[0]] // Imagen inicial
                }
                isCarouselActive={isCarouselActive}
                onClick={handleTileClick}
                onCompleteCycle={() => {}}
              />
            ))}
          </div>
          <div className="flex flex-row items-center justify-center bg-white p-2 cursor-pointer text-center rounded shadow w-full">
            Animation:
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              className="appearance-none w-5 h-5 bg-white border-2 border-red-300 rounded-full m-2
              checked:bg-red-400 checked:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-300 cursor-pointer
              checked:before:content-['✓'] checked:before:text-white checked:before:flex checked:before:items-center checked:before:justify-center checked:before:w-full checked:before:h-full"
            />
          </div>
        </>
      )}

      {/* Carrusel */}
      {activeCarousel && (
        <Carousel
          tileId={activeCarousel}
          onBack={handleBack}
          onAnimateTiles={animateTiles}
        />
      )}
    </div>
  );
}
