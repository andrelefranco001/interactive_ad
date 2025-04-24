// src/components/Tile.jsx

export default function Tile({ id, label, image, onClick }) {
  return (
    <div
      onClick={() => onClick(id)}
      className="flex flex-col items-center justify-center bg-white p-2 cursor-pointer text-center rounded shadow hover:bg-green-100 transition duration-200 ease-in-out transform hover:scale-105 hover:border-2 border-green-200"
    >
      <img
        src={image}
        alt={label}
        className="w-full h-[110px] object-cover mb-2 rounded"
      />
      <div className="font-semibold">{label}</div>
    </div>
  );
}
