import { useEffect, useState } from "react";
import Tile from "./Tile";
import Carousel from "./Carousel";
import logo from "../assets/w_logo.png";

import { sampleProducts } from "../data/products";

const tileData = [
  {
    id: 1,
    label: sampleProducts[1].name,
    images: [
      sampleProducts[1].images,
      ...sampleProducts[1].children.map((child) => child.images),
    ],
    skus: ["", ...sampleProducts[1].children.map((child) => child.sku)],
  },
  {
    id: 2,
    label: sampleProducts[2].name,
    images: [
      sampleProducts[2].images,
      ...sampleProducts[2].children.map((child) => child.images),
    ],
    skus: ["", ...sampleProducts[2].children.map((child) => child.sku)],
  },
  {
    id: 3,
    label: sampleProducts[3].name,
    images: [
      sampleProducts[3].images,
      ...sampleProducts[3].children.map((child) => child.images),
    ],
    skus: ["", ...sampleProducts[3].children.map((child) => child.sku)],
  },
  {
    id: 4,
    label: sampleProducts[4].name,
    images: [
      sampleProducts[4].images,
      ...sampleProducts[4].children.map((child) => child.images),
    ],
    skus: ["", ...sampleProducts[4].children.map((child) => child.sku)],
  },
];

export default function Banner() {
  const [showCheck, setShowCheck] = useState(true);
  const [showTiles, setShowTiles] = useState(false);
  const [activeCarousel, setActiveCarousel] = useState(null);
  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false); // Estado para rastrear la carga de imágenes

  const handleCheckboxChange = (e) => {
    setIsCarouselActive(e.target.checked);
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

      await Promise.all(imagePromises); // Espera a que todas las imágenes se carguen
      setIsImagesLoaded(true); // Marca las imágenes como cargadas
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheck(false);
      setShowTiles(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isImagesLoaded]);

  const handleTileCompleteCycle = (id) => {
    // Lógica para manejar cuando un Tile completa un ciclo
    setTimeout(() => {
      const randomTile = Math.floor(Math.random() * tileData.length) + 1;
      if (tileData.some((tile) => tile.id === randomTile)) {
        setActiveCarousel(randomTile);
        setShowTiles(false);
      }
    }, 1000);
  };

  const handleTileClick = (id) => {
    setActiveCarousel(id);
    setShowTiles(false);
  };

  const handleBack = () => {
    setActiveCarousel(null);
    setShowTiles(true);
    setIsCarouselActive(false);
  };

  return (
    <div className="border border-gray-300 w-[300px] h-[600px] p-0 overflow-hidden rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center">
      {showCheck && (
        <div className="text-4xl text-green-600 items-center justify-center flex flex-col">
          <img src={logo} alt="" />
          <div className="w-8 h-8 border-4 border-red-300 border-t-transparent rounded-full animate-spin mt-4"></div>
        </div>
      )}

      {showTiles && (
        <>
          <div className="tiles font-sans font-mono">
            {tileData.map((tile) => (
              <Tile
                key={tile.id}
                id={tile.id}
                label={tile.label}
                images={tile.images}
                skus={tile.skus}
                isCarouselActive={isCarouselActive}
                onClick={handleTileClick}
                onCompleteCycle={handleTileCompleteCycle}
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

      {activeCarousel && (
        <Carousel tileId={activeCarousel} onBack={handleBack} />
      )}
    </div>
  );
}
