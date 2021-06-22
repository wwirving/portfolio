const projects = [
  {
    title: "artefact",
    menu: `Artefact`,
    tags: ["coding", "design"],
    mainImg:
      "https://drive.google.com/file/d/1nFQ4Px60qapHz0pgNRyve71UpfYWilD8/view?usp=sharing",
    alt: "artefact menu image",
    hoverImg: "",
    description:
      `Artefact is a web interface which can be used to search and display images of artefacts from the Metropolitan Museum of Art. Queries may be filtered by medium and/or keywords before pressing 'SEARCH' to return a collection of matching objects. Click images to display more information, or navigate through the search collection using the section at the bottom of page. The font used is 'Sporting Grotesque' by Lucas Le Bihan, George Triantafyllakos & Maciej Połczyński.`,
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
    menu: `Object Cloud`,
    tags: ["coding", "design", "sound"],
    mainImg:
      "https://drive.google.com/file/d/1yqhG5S4u4a3H3XrB27OcPSBq9MWNCf7r/view?usp=sharing",
    alt: "objectCloud menu image",
    hoverImg: "../../assets/images/ocloud/main.png",
    description:
      `Object Cloud is a browser based video game environment. Navigate around the game using mouse (or touch) and try to avoid objects for as long as possible. Each object (sourced from assets by AC-bu studio) has uniquely generated audio and visual parameters and exists in a feedback-loop which increases throughout the game and upon collision with the player. All sound for the game was recorded in Ableton Live and structured using Howler.JS. The font used is 'Outward' by Raoul Audouin.`,
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
    menu: `Digital Calculator`,
    tags: ["code", "design", "testing"],
    mainImg:
      "https://drive.google.com/file/d/1PRfcFofpdlX1_ymOcs7UFwDm2tsYZgtY/view?usp=sharing",
    description: "This is a basic digital calculator programmed using Javascript. Click the body of the calculator to change colour, screen to clear, and search through previous queries using the right hand panel. The font used is 'Basteleur' by Keussel.",
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
    menu: `Morse Translator`,
    tags: ["code", "design", "testing"],
    mainImg:
      "https://drive.google.com/file/d/1YcQ55OuoyVpvIhLqyh2zpomU86vVJgH6/view?usp=sharing",
    description: "This is a translator and audio interface for translation of characters into Morse Code programmed using Javascript. Enter text and hit the circular button to translate, and make sure sound is enabled to hear the audio translation. Order can be reversed by clicking the left hand side button. The fonts used are 'Happy Times at the IKOB New Game Plus Edition' by Lucas Le Bihan and Pilowlava by Anton Moglia + Jérémy Landes.",
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
