import { useEffect, useState } from "react";
import Tile from "./Tile";
import Carousel from "./Carousel";
import active from "../assets/active.png";
import comfort from "../assets/comfort.png";
import beauty from "../assets/beauty.png";
import home from "../assets/home.png";

const tileData = [
  { id: 1, label: "Active", image: active },
  { id: 2, label: "Comfort", image: comfort },
  { id: 3, label: "Beauty", image: beauty },
  { id: 4, label: "Home", image: home },
];

export default function Banner() {
  const [showCheck, setShowCheck] = useState(true);
  const [showTiles, setShowTiles] = useState(false);
  const [activeCarousel, setActiveCarousel] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheck(false);
      setShowTiles(true);
      setTimeout(() => {
        // Lanzar carousel aleatorio
        const randomTile = Math.floor(Math.random() * 4) + 1;
        setActiveCarousel(randomTile);
        setShowTiles(false);
      }, 4000);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleTileClick = (id) => {
    setActiveCarousel(id);
    setShowTiles(false);
  };

  const handleBack = () => {
    setActiveCarousel(null);
    setShowTiles(true);
  };

  return (
    <div className="border border-gray-300 w-[300px] h-[600px] p-0 overflow-hidden rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center">
      {showCheck && (
        <div className="text-4xl text-green-600 text-center">✔</div>
      )}

      {showTiles && (
        <div className="tiles font-sans font-mono">
          {tileData.map((tile) => (
            <Tile
              key={tile.id}
              id={tile.id}
              label={tile.label}
              image={tile.image}
              onClick={handleTileClick}
            />
          ))}
        </div>
      )}
      {activeCarousel && (
        <Carousel tileId={activeCarousel} onBack={handleBack} />
      )}
    </div>
  );
}
