# Interactive Banner Assessment 🌟

This project is a React-based implementation of an interactive 300x600px banner, created as part of a technical assessment for a Creative Developer position.

## 🚀 Features

- **Initial Animation**: Displays a ✔️ checkmark animation on load.
- **Interactive Tiles**: Four tiles (Active, Comfort, Beauty, Home) with representative images and labels.
- **Dynamic Product Carousel**: Clicking on a tile opens a product carousel specific to that category.
- **Simulated Data Feed**: Product data is simulated as if coming from an API endpoint.
- **Back Navigation**: A "Back to Checklist" button allows users to return to the main tile view.
- **Random Tile Selection**: On load, one tile's carousel opens automatically at random.

## 🛠️ Technologies Used

- **React**: Component-based architecture for building the UI.
- **JavaScript (ES6+)**: Modern JavaScript features for logic and interactivity.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast development environment for React.
- **Modular Components**: Reusable and maintainable component structure.

## 📂 Project Structure

<pre> 
├── src/ 
├── assets/ # Static assets (images, logos, etc.) 
├── components/ # React components (Banner, Tile, Carousel) 
├── data/ # Simulated product data 
├── App.jsx # Main application entry point 
├── index.css # Global styles 
└── main.jsx # React DOM rendering 
├── public/ # Public files 
├── package.json # Project dependencies and scripts 
└── README.md # Project documentation 
</pre>

## 📖 How It Works

1. **Initial Load**:

   - The banner displays a loading animation.
   - After 1.5 seconds, the tiles are revealed.

2. **Tile Interaction**:

   - Each tile represents a category (e.g., Active, Comfort, Beauty, Home).
   - Clicking on a tile opens a product carousel for that category.

3. **Product Carousel**:

   - Displays products with images, names, prices, and SKUs.
   - Users can navigate between products using "Next" and "Previous" buttons.
   - A "Back to Checklist" button returns to the main tile view.

4. **Random Tile Selection**:
   - On load, a random tile's carousel is opened automatically.

## 🧩 Components

### 1. **Banner**

- Displays the main interactive banner with tiles.
- Handles the loading animation, tile animations, and navigation to the carousel.

### 2. **Tile**

- Represents an individual category tile.
- Animates between two images and handles user clicks.

### 3. **Carousel**

- Displays a product carousel for the selected category.
- Allows navigation between products and back to the main tile view.
