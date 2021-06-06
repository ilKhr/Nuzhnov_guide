const fs = require("fs");
const path = require("path");
const staticDataLinks = require("../constants");

const generatePageData = ({
  headerLink,
  nameSidebarLink,
  sidebarLinkPage,
  pageTitle,
  subtitles,
  textImageList,
}) => {
  console.log(textImageList);
  const result = [
    {
      sidebarItem: { name: nameSidebarLink, link: sidebarLinkPage },
      [headerLink]: {
        [nameSidebarLink]: {
          link: sidebarLinkPage,
          mainTitle: pageTitle,
          titleTextTitles: subtitles.slice(),
          textsImages: textImageList.slice(),
        },
      },
    },
  ];

  fs.writeFile(
    path.resolve(__dirname, "../../outputPage/page.json"),
    JSON.stringify(result, null, 2),
    (err) => {
      if (err) throw err;
      console.log("Data has been replaced!");
    }
  );

  return JSON.stringify(result, null, 2);
};

const generateData = {
  headerLink: "about-project",
  nameSidebarLink: "Test",
  sidebarLinkPage: "test-link",
  pageTitle: "Test title",
  subtitles: ["FirstTitle", "SecondTitle"],
  textImageList: [
    {
      paragraphs: ["Lorem 1,2,3", "Korem 2,3,4", "Bayan 543"],
      images: [
        { src: "/images/htc-vive-cosmos-elite.png", alt: "kek" },
        { src: "/images/htc-vive-cosmos-elite.png", alt: "kek" },
        { src: "/images/htc-vive-cosmos-elite.png", alt: "kek" },
      ],
    },
    {
      paragraphs: ["Lorem 3,4,5", "dsadsa 2,3,4", "dsadsadasd 543"],
      images: [
        { src: "/images/htc-vive-cosmos-elite.png", alt: "kek" },
        { src: "/images/htc-vive-cosmos-elite.png", alt: "kek" },
        { src: "/images/htc-vive-cosmos-elite.png", alt: "kek" },
      ],
    },
  ],
};

console.log(generatePageData(generateData));
