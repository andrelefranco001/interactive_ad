import { sampleProducts } from "../data/products";

export default function Carousel({ tileId, onBack }) {
  const products = sampleProducts[tileId] || [];

  return (
    <div className="mt-4">
      <button
        onClick={onBack}
        className="mb-2 bg-gray-700 text-white px-2 py-1 rounded"
      >
        Back to Checklist
      </button>
      <h3 className="font-bold">Products for Tile {tileId}</h3>
      <div className="mt-2">
        {products.map((p) => (
          <div key={p.sku} className="bg-gray-100 p-2 mb-2 rounded shadow">
            {p.name} (SKU: {p.sku})
          </div>
        ))}
      </div>
    </div>
  );
}
