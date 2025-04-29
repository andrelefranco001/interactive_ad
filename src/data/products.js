import active from "../assets/active.png";
import comfort from "../assets/comfort.png";
import beauty from "../assets/beauty.png";
import home from "../assets/home.png";

import logo from "../assets/w_logo.png";
import activelogo from "../assets/active_img.png";
import comfortlogo from "../assets/comfort_img.png";
import beautylogo from "../assets/beauty_img.png";
import homelogo from "../assets/home_img.png";

// Active imges
import shoes from "../assets/shoes_img.webp";
import hoodie from "../assets/hoodie_img.webp";
import pants from "../assets/pants_img.webp";

//Comfort images
import chair from "../assets/chair_img.webp";
import hat from "../assets/hat_img.webp";
import slipper from "../assets/slippers_img.webp";

//Beauty images
import lipstick from "../assets/lipstick_img.webp";
import nailpolish from "../assets/nailpolish_img.webp";
import eyeshadow from "../assets/eyeshadow_img.webp";

//Home images
import toaster from "../assets/toaster_img.webp";
import pot from "../assets/pot_img.webp";
import blender from "../assets/blender_img.webp";

export const sampleProducts = {
  1: {
    name: "Active",
    images: [active, activelogo],

    children: [
      { name: "Shoes", sku: "SKU:SH001", images: shoes, price: "$80 USD" },
      { name: "Hoodie", sku: "SKU:HD001", images: hoodie, price: "$20 USD" },
      { name: "Pants", sku: "SKU:PN001", images: pants, price: "$30 USD" },
    ],
  },
  2: {
    name: "Comfort",
    images: [comfort, comfortlogo],

    children: [
      { name: "Chair", sku: "SKU:CH001", images: chair, price: "$160 USD" },
      { name: "Hat", sku: "SKU:HT001", images: hat, price: "$75 USD" },
      { name: "Slippers", sku: "SKU:CU001", images: slipper, price: "$20 USD" },
    ],
  },
  3: {
    name: "Beauty",
    images: [beauty, beautylogo],

    children: [
      { name: "Lipstick", sku: "SKU:LB001", images: lipstick, price: "$7 USD" },
      {
        name: "Nailpolish",
        sku: "SKU:NS001",
        images: nailpolish,
        price: "$10 USD",
      },
      {
        name: "Eyeshadow Palette",
        sku: "SKU:MS001",
        images: eyeshadow,
        price: "$2 USD",
      },
    ],
  },

  4: {
    name: "Home",
    images: [home, homelogo],

    children: [
      { name: "Toaster", sku: "SKU:TS001", images: toaster, price: "$23 USD" },
      { name: "Pot", sku: "SKU:PT001", images: pot, price: "$10 USD" },
      { name: "Blender", sku: "SKU:MX001", images: blender, price: "$400 USD" },
    ],
  },
};
