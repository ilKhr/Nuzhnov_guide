const getRoutes = (staticData, pageData) => {
  return staticData.header.reduce((acc, item) => {
    for (const key in pageData[item.link]) {
      console.log("AAAAAAAAAAAAAAAAA0, ", pageData[item.link][key].link);
      acc[`/${item.link}/${pageData[item.link][key].link}`] = {
        static: staticData,
        sidebarName: item.name,
        page: pageData[item.link][key],
        route: `/${item.link}/${pageData[item.link][key].link}`,
      };
    }
    return acc;
  }, {});
};

module.exports = getRoutes;
