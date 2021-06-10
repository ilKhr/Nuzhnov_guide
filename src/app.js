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
          {
            name: staticDataLinks.basicInformation.sidebar[4].name,
            link: staticDataLinks.basicInformation.sidebar[4].link,
          },
          {
            name: staticDataLinks.basicInformation.sidebar[5].name,
            link: staticDataLinks.basicInformation.sidebar[5].link,
          },
          {
            name: staticDataLinks.basicInformation.sidebar[6].name,
            link: staticDataLinks.basicInformation.sidebar[6].link,
          },
          {
            name: staticDataLinks.basicInformation.sidebar[7].name,
            link: staticDataLinks.basicInformation.sidebar[7].link,
          },
          {
            name: staticDataLinks.basicInformation.sidebar[8].name,
            link: staticDataLinks.basicInformation.sidebar[8].link,
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
      titleTextTitles: ["Преподаватели:", ""],
      textsImages: [
        {
          paragraphs: ["Нужнов Евгений Владимирович"],
          images: [
            {
              src: "/images/Nuznov.jpg",
              alt: "Нужнов Евгений Владимирович",
            },
          ],
        },
        {
          paragraphs: ["Бова Виктория Викторовна"],
          images: [
            {
              src: "/images/Bova.jpg",
              alt: "Бова Виктория Викторовна",
            },
          ],
        },
      ],
    },
    institute: {
      link: staticDataLinks.aboutPage.sidebar[1].link,
      mainTitle: staticDataLinks.aboutPage.sidebar[1].name,
      titleTextTitles: ["Директор:"],
      textsImages: [
        {
          paragraphs: [
            "Директором Института компьютерных технологий и информационной безопастности является - ",
            "Веселов Геннадий Евгеньевич",
          ],
          images: [
            {
              src: "/images/Veselov.jpg",
              alt: "Директор ИКТИБ Веселов Геннадий Евгеньевич",
            },
          ],
        },
      ],
    },
    university: {
      link: staticDataLinks.aboutPage.sidebar[2].link,
      mainTitle: staticDataLinks.aboutPage.sidebar[2].name,
      titleTextTitles: ["Лектор:", "Институты:"],
      textsImages: [
        {
          paragraphs: ["Инна Константиновна Шевченко"],
          images: [
            {
              src: "/images/lektor.jpg",
              alt: "Лектор ЮФУ Инна Константиновна Шевченко",
            },
          ],
        },
        {
          paragraphs: [
            '<a href="https://sfedu.ru/www/stat_pages22.show?p=UNI/N11900/D">Информация о учебных подразделениях</a>',
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
            '<div style="margin-right: auto; margin-left: auto; max-width: 600px; width: 100%;">' +
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/R61g8wUCr40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
              "</div>",
          ],
        },
      ],
    },
    vrControllers: {
      link: staticDataLinks.basicInformation.sidebar[1].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[1].name,
      titleTextTitles: ["Что такое и для чего нужны?"],
      textsImages: [
        {
          paragraphs: [
            `В компьютерных играх с использованием виртуальной реальности важна роль не только тех гаджетов, которые погружают человека в смоделированный нереальный мир, но и устройств для ввода информации, с целью управления героями игр. Такие устройства и называются контроллерами VR.
            Что относится к контроллерам VR
            В категории контроллеров VR, в нашем интернет магазине представлены такие устройства как:
            • перчатки-контроллеры;
            • всенаправленная дорожка для бега;
            • touch контроллеры для рук;
            • ботинки;
            • автомобильный или мотоциклетный руль;
            • авиационный штурвал;
            • пистолет для стрельбы по целям в виртуальном мире;
            • контроллер отслеживания движений головы.
            Все эти устройства помогают геймеру свободно чувствовать себя в виртуальной реальности, управляя своим персонажем. Многие контроллеры VR используются в симуляторах вождения железнодорожного состава или управления полетом самолета и вертолета. В материальной реальности научиться управлять такими транспортными средствами стоит больших денег на топливо, а в виртуальном мире этих затрат нет.`,

            '<div style="margin-right: auto; margin-left: auto; max-width: 600px; width: 100%;">' +
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/zQBHnCZF1w8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
              "</div>",
          ],
        },
      ],
    },
    vrSensors: {
      link: staticDataLinks.basicInformation.sidebar[2].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[2].name,
      titleTextTitles: ["Для чего предназначены?"],
      textsImages: [
        {
          paragraphs: [
            "Предназначены для определения позиции и ориентации реального объекта (например, руки, головы или специального устройства) в виртуальной среде с помощью нескольких степене свободы. Как правило, трёх координат его расположения (x, y, z) и трёх углов, задающих его ориентацию в пространстве .",
            '<div style="margin-right: auto; margin-left: auto; max-width: 600px; width: 100%;">' +
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/yGEDeecFIOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
              "</div>",
          ],
        },
      ],
    },
    whereUseVR: {
      link: staticDataLinks.basicInformation.sidebar[3].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[3].name,
      titleTextTitles: [
        "Виртуальные путешествия",
        "Обучение",
        "Медицина",
        "Интернет-продажи",
        "Проектирование и строительство",
        "Коммуникации",
        "Массовые мероприятия",
      ],
      textsImages: [
        {
          paragraphs: [
            "Посетить самые отдаленные уголки, лежа на диване — мечта многих. Особенно, когда в карманах не густо, а впечатлений хочется. VR-очки позволят прогуляться по улочкам известных городов, рассмотреть шедевры в музеях или посидеть на берегу теплого моря в холодную зиму.",
          ],
        },
        {
          paragraphs: [
            `Благодаря ґаджетам виртуальной реальности процесс обучения может выйти на новый уровень. Согласитесь, изучать анатомию человека, движение космических тел, построение геометрических фигур, структуру атомов и молекул значительно проще, когда есть возможность потрогать все своими руками и осмотреть предметы со всех сторон. К тому же можно будет ощутить на себе перипетии важных исторических событий. Google успешно продвигает проект Cardboard в учебных и медицинских заведениях. Думаем, скоро и другие компании присоединятся к инициативе.`,
          ],
        },
        {
          paragraphs: [
            "VR-очки могут существенно облегчить работу врачей и помочь в лечении различных фобий. Уже есть подтвержденные факты виртуальных консультаций с пациентами и экспериментальное лечение психических расстройств в США с помощью технологий Google Glass.",
          ],
        },
        {
          paragraphs: [
            `Реализация технологий виртуальной реальности в интернет-продажах может иметь несколько вариантов: имитация магазина, демонстрация товаров из каталога, примерка одежды и тому подобное. Например, сеть магазинов товаров для дома Lowe уже запустила проект Holoroom, в рамках которого клиенты могут увидеть будущий дизайн ванной комнаты или кухни через VR-очки Oculus. Автоконцерн Volvo внедрил технологию HoloLens, которая помогает выбрать конфигурацию автомобиля.`,
          ],
        },
        {
          paragraphs: [
            `Даже самый продуманный проект не может продемонстрировать заказчику все, что хотел показать инженер, архитектор и дизайнер. VR-очки позволят создать дом, интерьер комнаты в объеме, предоставив возможность рассмотреть все со всех сторон. Можно пойти еще дальше и предложить клиенту расставить мебель или покрасить стены. Смеем предположить, что такое утверждение проекта придется по душе обеим сторонам. Разработчики же смогут протестировать продукцию в виртуальном пространстве, при необходимости внести коррективы, и только после этого приступить к реализации в реале.`,
          ],
        },
        {
          paragraphs: [
            "Виртуальная реальность расширяет горизонты общения, как бы не абсурдно это звучало. ☺ Например, можно провести совещание в виртуальном конференц-зале, совместно поработать над архитектурными, инженерными и любыми другими проектами или же дистанционно управлять зондами, станками и роботами. Кстати, приложение MasterpieceVR  уже умеет создавать 3D-объекты, над которыми можно работать целой командой.",
          ],
        },
        {
          paragraphs: [
            "Решить проблему дорогих билетов, конфликтных ситуаций и ограничений мест на массовые мероприятия могут также очки виртуальной реальности. Потому что с их помощью ощутить эффект присутствия на спортивном матче или концерте любимого исполнителя сможет каждый желающий, сидя у себя дома. Например, CNN уже проводила трансляцию президентских дебатов демократической партии в формате VR.",
          ],
        },
      ],
    },
    htcViveCosmosElite: {
      link: staticDataLinks.basicInformation.sidebar[4].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[4].name,
      titleTextTitles: [staticDataLinks.basicInformation.sidebar[4].name],
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
    vrShinecon: {
      link: staticDataLinks.basicInformation.sidebar[5].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[5].name,
      titleTextTitles: [staticDataLinks.basicInformation.sidebar[5].name],
      textsImages: [
        {
          paragraphs: [
            "Очки виртуальной реальности VR Shinecon SC-G05C подарят вам незабываемые ощущения при прохождении игр на вашем смартфоне. Облаченное в пластиковый корпус устройство смотрится эффектно за счет классического сочетания черного и белого цветов. С ним вы сможете частично погрузиться в мир виртуальной реальности. Принцип действия этой модели заключается в создании зрительного и акустического эффекта присутствия пользователя в локации, отображаемой на экране портативного устройства. Очки совместимы с любыми моделями смартфонов, чья диагональ экрана не менее 4.7 дюймов.",
            "Очки виртуальной реальности VR Shinecon SC-G05C используют экран смартфона для вывода изображения перед пользователем. Устройство совместимо с устройствами на базе операционной системы Android или iOS. Модель обладает большим полем зрения - 85˚, благодаря чему обеспечен эффект присутствия от погружения в виртуальную реальность. Межфокусное расстояние можно отрегулировать в пределах от 45 до 62 мм. Диаметр линз, установленных в представленные очки, равняется 40 мм.",
          ],
          images: [
            {
              src: "/images/VR_Shinecon_SC-G05C.jpg",
              alt: staticDataLinks.basicInformation.sidebar[5].name,
            },
          ],
        },
      ],
    },
    shinecon: {
      link: staticDataLinks.basicInformation.sidebar[6].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[6].name,
      titleTextTitles: [staticDataLinks.basicInformation.sidebar[6].name],
      textsImages: [
        {
          paragraphs: [
            `Очки виртуальной реальности Shinecon SC-Y005 - стильный и функциональный аксессуар, пользующийся популярностью у многочисленных владельцев портативной техники. Представленную модель отличает довольно привлекательный дизайн, обусловленный гармоничным сочетанием серого корпуса и стильных черных вставок. При изготовлении данного устройства производители отдали предпочтение такому практичному и износостойкому материалу, как пластик. Благодаря регулируемому ремешку, присутствующему в конструкции прибора, им сможет воспользоваться любой пользователь независимо от размера головы. Shinecon SC-Y005 разработаны специально для смартфонов, функционирующих на базе операционной системы Android. При этом конструкция рассматриваемого устройства определила его совместимость - данная модель предназначена для портативной техники с диагональю дисплея, располагающейся в диапазоне от 4.5 до 6 дюймов. Вам придется по вкусу довольно широкое поле зрения изображения, достигающее 100 градусов. Картинка выводится на экран смартфона.`,
          ],
          images: [
            {
              src: "/images/Shinecon.jpg",
              alt: staticDataLinks.basicInformation.sidebar[6].name,
            },
          ],
        },
      ],
    },
    smarterraVr2Mark2: {
      link: staticDataLinks.basicInformation.sidebar[7].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[7].name,
      titleTextTitles: [staticDataLinks.basicInformation.sidebar[7].name],
      textsImages: [
        {
          paragraphs: [
            `Очки виртуальной реальности SmarTerra VR2 Mark 2 подходят для любых моделей смартфонов и планшетов с диагональю экрана от 4.7 до 6 дюймов. В качестве ОС смартфона могут выступать и iOS, и Android. Расстояние между зрачками составляет 6-7 см, а диаметр линз – 4см. Поле зрения приравнивается к углу 90–100 градусов. Вес очков SmarTerra VR2 Mark 2 составляет 282 г, благодаря чему они не будут утомлять голову при продолжительном использовании. Изготовлена модель из прочного черного и серого пластика.`,
          ],
          images: [
            {
              src: "/images/SmarTerra_VR2_Mark_2.jpg",
              alt: staticDataLinks.basicInformation.sidebar[7].name,
            },
          ],
        },
      ],
    },
    htcМiveСosmos: {
      link: staticDataLinks.basicInformation.sidebar[8].link,
      mainTitle: staticDataLinks.basicInformation.sidebar[8].name,
      titleTextTitles: [staticDataLinks.basicInformation.sidebar[8].name],
      textsImages: [
        {
          paragraphs: [
            `Очки виртуальной реальности HTC Vive Cosmos предназначены для подключения к компьютеру для прохождения игр с необходимыми параметрами. Вся система сделана в виде игрового шлема, который максимально просто подключить: шлем подстроится под ваши параметры в виртуальной реальности благодаря сменным модулям. Для полноты происходящего картинка в модели имеет разрешение 2880 на 1700. Для максимального охвата пространства в очках виртуальной реальности HTC Vive Cosmos используются шестикамерные сенсоры. Четкая графика создается за счет высокой частоты обновления дисплея, а именно 90 Гц. Уникальной особенностью устройства является откидной дисплей, который в момент вернет вас в реальность, не нарушая при этом виртуальный мир. В модель уже встроены микрофон и наушники, что максимально дополнит вашу виртуальную реальность.`,
          ],
          images: [
            {
              src: "/images/HTC_Vive_Cosmos.jpg",
              alt: staticDataLinks.basicInformation.sidebar[8].name,
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

app.get("/", (req, res) => {
  return res.redirect("/about-project/subject");
});

staticData.header.forEach((item) => {
  app.get(`/${item.link}`, (req, res) => {
    return res.redirect(
      Object.keys(routesDataObject).find((key) => key.includes(item.link))
    );
  });
});

for (const route in routesDataObject) {
  console.log(routesDataObject[route]);
  app.get(route, (req, res) => {
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
