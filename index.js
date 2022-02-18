const axios = require("axios");

const getData = async (url) => {
  const axiosCall = await axios.get(url);
  let entriesArr = axiosCall.data.entries;
  let categoriesObj = {};
  entriesArr.map((element) => {
    let catArray = Object.keys(categoriesObj);
    let { Category } = element;
    if (!catArray.includes(Category)) {
      categoriesObj[Category] = [];
      categoriesObj[Category].push(element);
    } else if (categoriesObj[Category].length < 3) {
      categoriesObj[Category].push(element);
    }
  });
  for (let key in categoriesObj) {
    console.log(key.toUpperCase());
    console.log("------------------");
    categoriesObj[key].map((element) => {
      console.log(`Api: ${element.API}`);
      console.log(`Description: ${element.Description}`);
      console.log(`Link: ${element.Link}`);
      console.log(`Category: ${element.Category}`);
      console.log(` `);
    });
  }
};

getData("https://api.publicapis.org/entries");
