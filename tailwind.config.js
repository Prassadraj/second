import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "serif"],
        lato: ["Lato", "serif"],
      },
      boxShadow: {
        "custom-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      colors: {
        "custom-green": "#10b981",
        "light-green": "#D6FFF5",
        name: "#b5f7e7",
        maincol: "#02a884",
        gcolor: "#ab01ea",
        scolor: "rgba(0, 66, 255, 0.08)",
      },

      keyframes: {
        moveUp: {
          "0%,100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0px)" },
        },
        rightDown: {
          "0%,100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(10px) translateX(10px)" },
        },
        leftRight: {
          "0%,100%": { transform: "translateY(0px) translateX(-0px)" },
          "50%": { transform: "translateY(10px) translateX(-10px)" },
        },
        rightUp: {
          "0%,100%": { transform: "translateY(0px) translateX(-0px)" },
          "50%": { transform: "translateY(-10px) translateX(10px)" },
        },
        leftUp: {
          "0%,100%": { transform: "translateY(0px) translateX(-0px)" },
          "50%": { transform: "translateY(-10px) translateX(-10px)" },
        },
        leftRightQ: {
          "0%,100%": { transform: " rotate(-10deg)" },
          "50%": { transform: " rotate(10deg)" },
        },
        bouncing: {
          "0%,100%": { transform: "translateY(-2px)" },
          "50%": { transform: " translateY(2px)" },
        },
        bumble: {
          "0%,100%": { transform: "translateY(-20px)" },
          "50%": { transform: " translateY(20px)", scale: "1.2", delay: "0.5" },
        },
        smallbumble: {
          "0%, 100%": {
            transform: "translateY(-20px)",
          },
          "25%, 75%": {
            transform: "translateY(10px)",
            scale: "1.1",
          },
          "50%": {
            transform: "translateY(20px)",
            scale: "1.2",
          },
        },
      },
      animation: {
        moveUp: "moveUp 5s ease-in-out infinite",
        leftRight: "leftRight 8s ease-in-out infinite",
        rightDown: "rightDown 8s ease-in-out infinite",
        rightUp: "rightUp 8s ease-in-out infinite",
        leftRightQ: "leftRightQ 4s ease-in-out infinite",
        bouncing: "bouncing 4s ease-in-out infinite",
        bumble: "bumble 7s ease-in-out infinite",
        smallbumble: "smallbumble 4s ease-in-out infinite",
        leftUp: "leftUp 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
