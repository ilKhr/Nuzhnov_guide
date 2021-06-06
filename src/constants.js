module.exports = {
  aboutPage: {
    name: "О проекте",
    link: "about-project",
    sidebar: [
      { name: "Предмет", link: "subject" },
      { name: "Институт", link: "institute" },
      { name: "Университет", link: "university" },
    ],
  },
  basicInformation: {
    name: "Основная информация",
    link: "basic-information",
    sidebar: [
      { name: "VR очки", link: "vr-glasses" },
      { name: "VR контроллеры", link: "vr-controllers" },
      { name: "VR датчики", link: "vr-sensors" },
      { name: "HTC VIVE Cosmos Elite", link: "htc-vive-cosmos-elite" },
    ],
  },

  sourcesUsed: {
    name: "Используемые источники",
    link: "sources-used",
    sidebar: [{ name: "Прон.орг", link: "pron-org" }],
  },
  author: {
    name: "Автор",
    link: "about-author",
    sidebar: [{ name: "Генеральный разработчик", link: "general-developer" }],
  },
};

const staticData = {
  header: [
    {
      name: "О проекте",
      link: "about-project",
      sidebar: {
        sidebarItems: [
          { name: "Предмет", link: "subject" },
          { name: "Институт", link: "institute" },
          { name: "Университет", link: "university" },
        ],
      },
    },
    {
      name: "Основная информация",
      link: "basic-information",
      sidebar: {
        sidebarItems: [
          { name: "VR очки", link: "vr-glasses" },
          { name: "VR контроллеры", link: "vr-controllers" },
          { name: "VR датчики", link: "vr-sensors" },
          { name: "HTC VIVE Cosmos Elite", link: "htc-vive-cosmos-elite" },
        ],
      },
    },
    {
      name: "Используемые источники",
      link: "sources-used",
      sidebar: {
        sidebarItems: [
          { name: "VR очки", link: "vr-glass" },
          { name: "VR контроллеры", link: "vr-controllers" },
          { name: "VR датчики", link: "vr-sensors" },
        ],
      },
    },
    {
      name: "Автор",
      link: "about-author",
      sidebar: {
        sidebarItems: [
          { name: "VR очки", link: "vr-glasses" },
          { name: "VR контроллеры", link: "vr-controllers" },
          { name: "VR датчики", link: "vr-sensors" },
        ],
      },
    },
  ],
};

const pageData = {
  "about-project": {
    subject: {
      link: "subject",
      mainTitle: "Дистанционные информационные технологии",
      titleTextTitles: ["Преподаватели:"],
      textsImages: [
        {
          paragraphs: [
            "Бова Виктория Викторовна",
            "Нужнов Евгений Владимирович",
          ],
        },
      ],
    },
  },
  "basic-information": {
    vrGlasses: {
      link: "vr-glasses",
      mainTitle: "VR очки",
      titleTextTitles: [
        "Что такое VR очки?",
        "Когда были придуманы первые VR очки?",
      ],
      textsImages: [
        {
          paragraphs: [
            "VR-очки — это специализированный прибор, способный симулировать разнообразные аудиовизуальные трехмерные пространства. Состоит из пластикового (реже картонного) корпуса, экрана с перегородкой и асферических линз, которые фокусируют изображение. Эффект присутствия создается благодаря адаптивной передачи картинки на каждый глаз отдельно и отслеживания всех движений головы датчиком-гироскопом и акселерометром. ",
          ],
        },
        {
          paragraphs: [
            "Первая система виртуальной реальности появилась в 1962 году, когда Мортон Хейлиг",
          ],
        },
      ],
    },
    vrControllers: {
      link: "vr-controllers",
      mainTitle: "Дистанционные информационные технологии",
      titleTextTitles: ["Преподаватели:"],
      textsImages: [
        {
          paragraphs: [
            "Бова Виктория Викторовна",
            "Нужнов Евгений Владимирович",
          ],
        },
      ],
    },
    vrSensors: {
      link: "vr-sensors",
      mainTitle: "Дистанционные информационные технологии",
      titleTextTitles: ["Преподаватели:"],
      textsImages: [
        {
          paragraphs: [
            "Бова Виктория Викторовна",
            "Нужнов Евгений Владимирович",
          ],
        },
      ],
    },
    htcViveCosmosElite: {
      link: "htc-vive-cosmos-elite",
      mainTitle: "VR очки",
      titleTextTitles: ["HTC VIVE Cosmos Elite"],
      textsImages: [
        {
          paragraphs: [
            "Погрузиться в виртуальный мир, ощутить себя по-другому помогают очки виртуальной реальности HTC VIVE Cosmos Elite. Они позволяют изучать новые места, обеспечивают полную свободу передвижения. Просмотр осуществляется через разрешение 2880 x 1700. В LCD-панелях устройства расстояние между пикселями уменьшено по сравнению с ранней моделью, что сводит к минимуму эффект screen-door.",
            "Очки виртуальной реальности HTC VIVE Cosmos Elite укомплектованы настраиваемыми головными наушниками, позволяющими насладиться стереозвучанием в процессе исследования виртуального мира. Прибор легко снимать и надевать, он имеет универсальную конструкцию и комфортно размещается на голове любого размера. Четкость зрения значения не имеет. Площадь игрового пространства достигает 15 квадратных метров.",
          ],
          images: [
            {
              src: "/images/htc-vive-cosmos-elite.png",
              alt: "HTC VIVE Cosmos Elite",
            },
          ],
        },
      ],
    },
  },
};
