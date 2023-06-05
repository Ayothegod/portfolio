
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{png,svg,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "russo": ['Russo One'],
        // "quantico": ['Quantico', "sans-serif"], mildly alien, little orbitron
        "orbitron": ['Orbitron', "sans-serif"],
        "josefin": ['Josefin Sans', "sans-serif"],
        // "courgette": [ 'Courgette', "cursive"], curvy
        // "audiowide": [ 'Audiowide'], alien looks like orbitron
      },
    },
  },
  plugins: [],
};
