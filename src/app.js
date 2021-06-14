const express = require("express");
const getRoutes = require("./utils/getRoutes");
const { staticDataLinks, pageDataLinks } = require("./constants");

const generateStaticData = (staticDataLinks) => {
  const result = Object.entries(staticDataLinks).map(([key, value], index) => {
    return {
      name: value.name,
      link: value.link,
      sidebar: {
        sidebarItems: [...value.sidebar],
      },
    };
  });
  return result;
};

const generatePageData = (pageDataLinks) => {
  const result = Object.entries(pageDataLinks).reduce((acc, [key, value]) => {
    const element = value.map((item, childIndex) => {
      return {
        link: staticDataLinks[key].sidebar[childIndex].link,
        mainTitle: staticDataLinks[key].sidebar[childIndex].name,
        titleTextTitles: item.titleTextTitles.slice(),
        textsImages: [...item.textsImages],
      };
    });

    acc[staticDataLinks[key].link] = {
      ...element,
    };

    return acc;
  }, {});

  return result;
};

const staticData = {
  header: [...generateStaticData(staticDataLinks)],
};

const pageData = generatePageData(pageDataLinks);

const routesDataObject = getRoutes(staticData, pageData);

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  return res.redirect("/discipline/introduction");
});

staticData.header.forEach((item) => {
  app.get(`/${item.link}`, (req, res) => {
    return res.redirect(
      Object.keys(routesDataObject).find((key) => key.includes(item.link))
    );
  });
});

for (const route in routesDataObject) {
  console.log(route);
  app.get(route, (req, res) => {
    res.render("index", routesDataObject[route]);
  });
}

app.use("*", (req, res) => {
  res.send(
    '<div style="text-align: center;"">Тебе не надо сюда. ТЕБЕ НАДО ' +
      '<a href="/" >' +
      "СЮДА" +
      "</a></div>"
  );
});

app.use("/", function (request, response) {
  response.send("Главная страница");
});
app.listen(3000);
