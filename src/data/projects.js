const projects = [
  {
    title: "SCI-MX",
    menu: `SCI-MX`,
    tags: ["coding", "design", "database"],
    mainImg:
      "https://drive.google.com/file/d/1f9KFcmvP4R5KYjD3Lv5ouxSay0s4rHDT/view?usp=sharing",
    alt: "sci-mx menu image",
    hoverImg: "",
    description: `The SCI-MX app was created in collaboration with Ross Richardson and Gemma Peakman from SCI-MX as part of the final client-project from the Nology software development course. 
    
    The app was created around a brief to develop a workout library for the brand audience and to promote selected SCI-MX products and social channels.
    
    The app was prototyped in Figma and then developed using React (Front-End) and Firebase (Back-End). For a full description of the project see the Github link below.`,
    links: {
      online: "https://client-project-f60f4.firebaseapp.com/",
      github: "https://github.com/nology-tech/sci-mx",
      figma:
        "https://www.figma.com/file/FD21nxBEniYTAn0dXup42C/Sculpture-API?node-id=0%3A1",
    },
    imgAssets: {},
    idProject: "scimx",
  },
  {
    title: "artefact",
    menu: `Artefact`,
    tags: ["coding", "design"],
    mainImg:
      "https://drive.google.com/file/d/1nFQ4Px60qapHz0pgNRyve71UpfYWilD8/view?usp=sharing",
    alt: "artefact menu image",
    hoverImg: "",
    description: `Artefact is a web interface which can be used to search and display images of artefacts from the Metropolitan Museum of Art. Queries may be filtered by medium and/or keywords before pressing 'SEARCH' to return a collection of matching objects. Click images to display more information, or navigate through the search collection using the section at the bottom of page. The font used is 'Sporting Grotesque' by Lucas Le Bihan, George Triantafyllakos & Maciej Połczyński.`,
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
    description: `Object Cloud is a browser based video game environment. Navigate around the game using mouse (or touch) and try to avoid objects for as long as possible. Each object (sourced from assets by AC-bu studio) has uniquely generated audio and visual parameters and exists in a feedback-loop which increases throughout the game and upon collision with the player. All sound for the game was recorded in Ableton Live and structured using Howler.JS. The font used is 'Outward' by Raoul Audouin.`,
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
    title: "morseTranslator",
    menu: `Morse Translator`,
    tags: ["code", "design", "testing"],
    mainImg:
      "https://drive.google.com/file/d/1YcQ55OuoyVpvIhLqyh2zpomU86vVJgH6/view?usp=sharing",
    description:
      "This is a translator and audio interface for translation of characters into Morse Code programmed using Javascript. Enter text and hit the circular button to translate, and make sure sound is enabled to hear the audio translation. Order can be reversed by clicking the left hand side button. The fonts used are 'Happy Times at the IKOB New Game Plus Edition' by Lucas Le Bihan and Pilowlava by Anton Moglia + Jérémy Landes.",
    links: {
      online: "https://wwirving.github.io/morseTranslator/",
      github: "https://github.com/wwirving/morseTranslator",
      figma:
        "https://www.figma.com/file/FOrb6J98iKhzCbYXd7a5mZ/Morse-Code-Translator?node-id=0%3A1",
    },
    imgAssets: {},
    idProject: "mors",
  },
  {
    title: "Flows",
    menu: `Flows`,
    tags: ["code", "design", "testing"],
    mainImg:
      "https://drive.google.com/file/d/1bfYHYkr6Kwv-GFuXdB2aIUxvUNChaiId/view?usp=sharing",
    description: `Flows is a series of four media compositions produced between 2020-2021.

    The series is a combined work of electronic music production and graphics programming, composed entirely with software as a reflection on data as material and medium. The work follows research into an expansive field of digital sculpture within which visual and sonic elements are combined and developed as oppositions throughout practice.
    
    Through working with low-level visual and audio programming tools, contingency is developed as a theme throughout the work as part of a ‘limited aleatoric counterpoint’. The varied audio sources represents an archival approach to re-sampling salvaged material from hard-drives which is then processed using a breadth of DSP techniques in an electroacoustic language inspired by the Hyperrealism of Noah Creshevsky. Visually, early pioneers of ‘visual music’ such as John Whitney and Oskar Fischinger are referenced alongside experimental film-makers such as Stan Brakhage.`,
    links: {
      online: "https://player.vimeo.com/video/507461364",
    },
    imgAssets: {},
    idProject: "flows",
  },
  {
    title: "webCalculator",
    menu: `Digital Calculator`,
    tags: ["code", "design", "testing"],
    mainImg:
      "https://drive.google.com/file/d/1PRfcFofpdlX1_ymOcs7UFwDm2tsYZgtY/view?usp=sharing",
    description:
      "This is a basic digital calculator programmed using Javascript. Click the body of the calculator to change colour, screen to clear, and search through previous queries using the right hand panel. The font used is 'Basteleur' by Keussel.",
    links: {
      online: "https://wwirving.github.io/webCalculator/",
      github: "https://github.com/wwirving/webCalculator",
      figma:
        "https://www.figma.com/file/m84cm9QshEQYCZ4x4G6Ctv/Calculator?node-id=0%3A1",
    },
    imgAssets: {},
    idProject: "calc",
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
