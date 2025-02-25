/* Your data here */
import galaxy from "./assets/s25ultra.png";
import watch from "./assets/Galaxy-watch.png";
import galaxyFlip from "./assets/galaxy-flip.png";
import galaxyBuds from "./assets/galaxy-bud.png";

export const AVAILABLE_IMAGE = [
    {
        id: "p1",	
        title: "Galaxy S25 Ultra",
        description: "The latest flagship smartphone with top-tier features.",
        image: {
            src: galaxy,
            alt: "Galaxy S25 Ultra",
        },
    },
    {
        id: "p2",
        title: "Galaxy Watch",
        description: "A smartwatch with advanced health tracking.",
        image: {
            src: watch,
            alt: "Galaxy Watch",
        },
    },
    {
        id: "p3",
        title: "Galaxy Flip",
        description: "A stylish and flexible foldable phone.",
        image: {
            src: galaxyFlip,
            alt: "Galaxy Flip",
        },
    },
    {
        id: "p4",
        title: "Galaxy Buds",
        description: "Wireless earbuds with noise cancellation.",
        image: {
            src: galaxyBuds,
            alt: "Galaxy Buds",
        },
    },
];