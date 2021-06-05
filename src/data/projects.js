const projects = [
  {
    title: "objectCloud",
    tags: ["coding", "design", "sound"],
    mainImg:
      "https://drive.google.com/file/d/1qiR9riF7FE4Wdv5bAJ2Sta_OR-j4XKYY/view?usp=sharing",
    alt: "objectCloud menu image",
    hoverImg: "../../assets/images/ocloud/main.png",
    description:
      "Object Cloud is a browser based game built using Javascript, HTML and CSS. The game is built using HTML canvas and a class orientated approach to game mechanics and design. Each object (sourced from gifs by ac-bu studio) has uniquely generated parameters and exists in an audio visual feedback-loop which increases throughout the game. The audio events for the game are handled by Howler.JS and then processed globally through Tuna.JS, allowing global control of reverb and delay. Visual feedback is then modulated by increasing the canvas-refresh time within the animation loop. Game audio was synthesised and recorded in Ableton Live, with gamelan samples sourced from the Omnisphere library. The main character and design of the game were generated in Figma. The font used is Overwatch. Though designed to be played on desktop, the game also scales well to mobile and can be played continously between mobile and portrait modes.",
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
    tags: ["coding", "design", "testing"],
    mainImg:
      "https://drive.google.com/file/d/1cly_C2lrU_vdupE7YQ58-d0HdiTQMBCQ/view?usp=sharing",
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
    tags: ["coding", "design", "testing"],
    mainImg:
      "https://drive.google.com/file/d/1UN1sHXzyvzLgJpesS8d140DMLrGRmyiP/view?usp=sharing",
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
  {
    title: "Flows",
    tags: ["AV"],
    mainImg:
      "https://drive.google.com/file/d/1d-IJwbRSYx81kU7oWNhXEI7-BigjsspX/view?usp=sharing",
    description:
      "Flows is a series of four media compositions produced between 2020-2021. The series is a combined work of electronic music production and graphics programming, composed entirely with software as a reflection on data as material and medium. The work follows research into an expansive field of digital sculpture within which visual and sonic elements are combined and developed as oppositions throughout practice. Through working with low-level visual and audio programming tools, contingency is developed as a theme throughout the work as part of a ‘limited aleatoric counterpoint’. The varied audio sources represents an archival approach to re-sampling salvaged material from hard-drives which is then processed using a breadth of DSP techniques in an electroacoustic language inspired by the Hyperrealism of Noah Creshevsky. Visually, early pioneers of ‘visual music’ such as John Whitney and Oskar Fischinger are referenced alongside experimental film-makers such as Stan Brakhage. Length: 12 minutes 45 seconds. Visuals by Will Irving. Produced, Recorded by Will Irving. Mixed and Mastered by Al Carlson.",
    links: {
      online:
        "https://player.vimeo.com/video/507461364?badge=0&amp;player_id=0&amp;app_id=58479",
    },
    imgAssets: {},
    idProject: "flows",
  },
  {
    title: "L2IMG",
    tags: ["concept", "coding"],
    mainImg: "./assets/images",
    description:
      "Experimental tool to scrub, download and catalogue google images via. Node.JS (images-scraper module).",
    links: {
      online: "",
      github: "https://github.com/wwirving/L2IMG",
      figma: "",
    },
    imgAssets: {},
    idProject: "L2IMG",
  },
  {
    title: "Folk",
    tags: ["audio programming"],
    mainImg: "./assets/images",
    description: "Folk is a digital string instrument and sampler",
    links: {
      online: "",
      github: "https://github.com/wwirving/Folk",
    },
    imgAssets: {},
    idProject: "folk",
  },
  {
    title: "Forms",
    tags: ["AV"],
    mainImg:
      "https://drive.google.com/file/d/1sLKSfAsuN_a4d_lBcpyJGgI-1JAEQwwi/view?usp=sharing",
    description:
      "Forms is a series of 8 short media compositions produced in 2020 as part of initial research into audiovisual relationships and digital sculpture. Each form was generated using the 3D modelling technique ‘volume ray marching’ and then short, experimental scores were produced improvisationally in response to each clip over the course of a week. Visually, this the first experiment with graphics programming in practice and takes influence from the early computer art demoscene. Sonically, an aim for the project was to create short audio motifs and partner them with forms such that when either the visual ‘sculputre’ or isolated piece of audio would be recalled, its counterpart would come to mind, a method of enquiry that has been since continued and developed in later work. Available on request. Visuals by Will Irving. Recorded, produced, mixed by Will Irving",
    links: {
      online: "https://vimeo.com/508797418/78732aa8e4",
    },
    imgAssets: {},
    idProject: "forms",
  },
];

export default projects;
