const express = require("express");
const getRoutes = require("./utils/getRoutes");
const staticDataLinks = require("./constants");

const staticData = {
  header: [
    {
      name: staticDataLinks.aboutPage.name,
      link: staticDataLinks.aboutPage.link,
      sidebar: {
        sidebarItems: [
          {
            name: staticDataLinks.aboutPage.sidebar[0].name,
            link: staticDataLinks.aboutPage.sidebar[0].link,
          },
          {
            name: staticDataLinks.aboutPage.sidebar[1].name,
            link: staticDataLinks.aboutPage.sidebar[1].link,
          },
          {
            name: staticDataLinks.aboutPage.sidebar[2].name,
            link: staticDataLinks.aboutPage.sidebar[2].link,
          },
          {
            name: "Test",
            link: "test-link",
          },
        ],
      },
    },
    {
      name: staticDataLinks.basicInformation.name,
      link: staticDataLinks.basicInformation.link,
      sidebar: {
        sidebarItems: [
          {
            name: staticDataLinks.basicInformation.sidebar[0].name,
            link: staticDataLinks.basicInformation.sidebar[0].link,
          },
          {
            name: staticDataLinks.basicInformation.sidebar[1].name,
            link: staticDataLinks.basicInformation.sidebar[1].link,
          },
          {
            name: staticDataLinks.basicInformation.sidebar[2].name,
            link: staticDataLinks.basicInformation.sidebar[2].link,
          },
          {
            name: staticDataLinks.basicInformation.sidebar[3].name,
            link: staticDataLinks.basicInformation.sidebar[3].link,
          },
        ],
      },
    },
    {
      name: staticDataLinks.sourcesUsed.name,
      link: staticDataLinks.sourcesUsed.link,
      sidebar: {
        sidebarItems: [
          {
            name: staticDataLinks.sourcesUsed.sidebar[0].name,
            link: staticDataLinks.sourcesUsed.sidebar[0].link,
          },
        ],
      },
    },
    {
      name: staticDataLinks.author.name,
      link: staticDataLinks.author.link,
      sidebar: {
        sidebarItems: [
          {
            name: staticDataLinks.author.sidebar[0].name,
            link: staticDataLinks.author.sidebar[0].link,
          },
        ],
      },
    },
  ],
};

const pageData = {
  [staticDataLinks.aboutPage.link]: {
    subject: {
      link: staticDataLinks.aboutPage.sidebar[0].link,
      mainTitle: staticDataLinks.aboutPage.sidebar[0].name,
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
    Test: {
      link: "test-link",
      mainTitle: "Test title",
      titleTextTitles: ["FirstTitle", "SecondTitle"],
      textsImages: [
        {
          paragraphs: ["Lorem 1,2,3", "Korem 2,3,4", "Bayan 543"],
          images: [
            {
              src: "/images/htc-vive-cosmos-elite.png",
              alt: "kek",
            },
            {
              src: "/images/htc-vive-cosmos-elite.png",
              alt: "kek",
            },
            {
              src: "/images/htc-vive-cosmos-elite.png",
              alt: "kek",
            },
          ],
        },
        {
          paragraphs: ["Lorem 3,4,5", "dsadsa 2,3,4", "dsadsadasd 543"],
          images: [
            {
              src: "/images/htc-vive-cosmos-elite.png",
              alt: "kek",
            },
            {
              src: "/images/htc-vive-cosmos-elite.png",
              alt: "kek",
            },
            {
              src: "/images/htc-vive-cosmos-elite.png",
              alt: "kek",
            },
          ],
        },
      ],
    },
  },
  //----------------------------------------------------------------
  [staticDataLinks.basicInformation.link]: {
    vrGlasses: {
      link: staticDataLinks.basicInformation.sidebar[0].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[0].name,
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
      link: staticDataLinks.basicInformation.sidebar[1].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[1].name,
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
      link: staticDataLinks.basicInformation.sidebar[2].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[2].name,
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
      link: staticDataLinks.basicInformation.sidebar[3].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[3].name,
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
  //----------------------------------------------------------------

  [staticDataLinks.sourcesUsed.link]: {
    subject: {
      link: staticDataLinks.sourcesUsed.sidebar[0].link,
      mainTitle: staticDataLinks.sourcesUsed.sidebar[0].name,
      titleTextTitles: ["TITLE:"],
      textsImages: [
        {
          paragraphs: ["FIrst paragraphs", "Second paragraphs"],
        },
      ],
    },
  },
  //----------------------------------------------------------------

  [staticDataLinks.author.link]: {
    subject: {
      link: staticDataLinks.author.sidebar[0].link,
      mainTitle: staticDataLinks.author.sidebar[0].name,
      titleTextTitles: ["AUTHOR:"],
      textsImages: [
        {
          paragraphs: ["FIrst paragraphs", "Second paragraphs"],
        },
      ],
    },
  },
};

const routesDataObject = getRoutes(staticData, pageData);

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

staticData.header.forEach((item) => {
  app.get(`/${item.link}`, (req, res) => {
    return res.redirect(
      Object.keys(routesDataObject).find((key) => key.includes(item.link))
    );
  });
});

for (const route in routesDataObject) {
  app.get(route, (req, res) => {
    // console.log(routesDataObject[route].page.textsImages.images);
    res.render("index", routesDataObject[route]);
  });
}

// app.get("/about-project/subject", (req, res) => {
//   res.render("index", pageData["about-project"].subject);
// });

app.use("/", function (request, response) {
  response.send("Главная страница");
});
app.listen(3000);
