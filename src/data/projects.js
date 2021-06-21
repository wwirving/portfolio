const projects = [
  {
    title: "artefact",
    tags: ["coding", "design"],
    mainImg:
      "https://drive.google.com/file/d/1nFQ4Px60qapHz0pgNRyve71UpfYWilD8/view?usp=sharing",
    alt: "artefact menu image",
    hoverImg: "",
    description:
      `Artefact is a web API used to search and display images of artefacts from Met Museum archive , filtered by medium and search query. Click image to display more information`,
    links: {
      online: "https://artefact-api.web.app/",
      github: "https://github.com/wwirving/artefact",
      figma:
        "https://www.figma.com/file/FD21nxBEniYTAn0dXup42C/Sculpture-API?node-id=0%3A1",
    },
    imgAssets: {},
    idProject: "artefact",
  },
  {
    title: "objectCloud",
    tags: ["coding", "design", "sound"],
    mainImg:
      "https://drive.google.com/file/d/1yqhG5S4u4a3H3XrB27OcPSBq9MWNCf7r/view?usp=sharing",
    alt: "objectCloud menu image",
    hoverImg: "../../assets/images/ocloud/main.png",
    description:
      `Object Cloud is a browser based game built using Javascript, HTML and CSS. 

The game is built using HTML canvas and a class orientated approach to game mechanics and design. Each object (sourced from gifs by ac-bu studio) has uniquely generated parameters and exists in an audio visual feedback-loop which increases throughout the game. 

The audio events for the game are handled by Howler.JS and then processed globally through Tuna.JS, allowing global control of reverb and delay. Visual feedback is then modulated by increasing the canvas-refresh time within the animation loop. Game audio was synthesised and recorded in Ableton Live, with gamelan samples sourced from the Omnisphere library. 

The main character and design of the game were generated in Figma. The font used is Overwatch. Though designed to be played on desktop, the game also scales well to mobile and can be played continously between mobile and portrait modes.`,
    links: {
      online: "https://wwirving.github.io/objectCloud/",
      github: "https://github.com/wwirving/objectCloud",
      figma:
        "https://www.figma.com/file/whuBO3fjVRNDoumeizE1jH/Object-Cloud?node-id=0%3A1",
    },
    imgAssets: {},
    idProject: "ocloud",
  },
  {
    title: "webCalculator",
    tags: ["code", "design", "testing"],
    mainImg:
      "https://drive.google.com/file/d/1PRfcFofpdlX1_ymOcs7UFwDm2tsYZgtY/view?usp=sharing",
    description: "Digital calculator created using HTML, CSS and JS",
    links: {
      online: "https://wwirving.github.io/webCalculator/",
      github: "https://github.com/wwirving/webCalculator",
      figma:
        "https://www.figma.com/file/m84cm9QshEQYCZ4x4G6Ctv/Calculator?node-id=0%3A1",
    },
    imgAssets: {},
    idProject: "calc",
  },
  {
    title: "morseTranslator",
    tags: ["code", "design", "testing"],
    mainImg:
      "https://drive.google.com/file/d/1YcQ55OuoyVpvIhLqyh2zpomU86vVJgH6/view?usp=sharing",
    description: "",
    links: {
      online: "https://wwirving.github.io/morseTranslator/",
      github: "https://github.com/wwirving/morseTranslator",
      figma:
        "https://www.figma.com/file/FOrb6J98iKhzCbYXd7a5mZ/Morse-Code-Translator?node-id=0%3A1",
    },
    imgAssets: {},
    idProject: "mors",
  },
  // {
  //   title: "L2IMG",
  //   tags: ["concept", "code"],
  //   mainImg: "./assets/images",
  //   description:
  //     "Experimental tool to scrub, download and catalogue google images via. Node.JS (images-scraper module).",
  //   links: {
  //     online: "",
  //     github: "https://github.com/wwirving/L2IMG",
  //     figma: "",
  //   },
  //   imgAssets: {},
  //   idProject: "L2IMG",
  // },
  // {
  //   title: "Folk",
  //   tags: ["audio programming"],
  //   mainImg: "./assets/images",
  //   description: "Folk is a digital string instrument and sampler",
  //   links: {
  //     online: "",
  //     github: "https://github.com/wwirving/Folk",
  //   },
  //   imgAssets: {},
  //   idProject: "folk",
  // },
];

export default projects;
