import active from "../assets/active.png";
import comfort from "../assets/comfort.png";
import beauty from "../assets/beauty.png";
import home from "../assets/home.png";

// Active imges
import shoes from "../assets/shoes.png";
import hoodie from "../assets/hoodie.png";
import pants from "../assets/pants.webp";

//Comfort images
import chair from "../assets/chair.webp";
import hat from "../assets/hat.webp";
import cushion from "../assets/cushion.webp";

//Beauty images
import lipstick from "../assets/lipstick.webp";
import nailpolish from "../assets/nailpolish.webp";
import eyeshadow from "../assets/eyeshadow.png";

//Home images
import toaster from "../assets/toaster.webp";
import pot from "../assets/pot.webp";
import blender from "../assets/blender.webp";

export const sampleProducts = {
  1: {
    name: "Active",
    images: active,
    children: [
      { name: "Shoes", sku: "SKU:SH001", images: shoes },
      { name: "Hoodie", sku: "SKU:HD001", images: hoodie },
      { name: "Pants", sku: "SKU:PN001", images: pants },
    ],
  },
  2: {
    name: "Comfort",
    images: comfort,
    children: [
      { name: "Chair", sku: "SKU:CH001", images: chair },
      { name: "Hat", sku: "SKU:HT001", images: hat },
      { name: "Cushion", sku: "SKU:CU001", images: cushion },
    ],
  },
  3: {
    name: "Beauty",
    images: beauty,
    children: [
      { name: "Lipstick", sku: "SKU:LB001", images: lipstick },
      { name: "Nailpolish", sku: "SKU:NS001", images: nailpolish },
      { name: "Eyeshadow Palette", sku: "SKU:MS001", images: eyeshadow },
    ],
  },

  4: {
    name: "Home",
    images: home,
    children: [
      { name: "Toaster", sku: "SKU:TS001", images: toaster },
      { name: "Pot", sku: "SKU:PT001", images: pot },
      { name: "Blender", sku: "SKU:MX001", images: blender },
    ],
  },
};
