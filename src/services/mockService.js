const database = [
  {
    id: 1,
    title: "Santa Rosa",
    category: "Rosa",
    stock: 5,
    imgurl:"https://viapais.com.ar/resizer/PtznYNrnjInZo6Pq3AklPNwch3I=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/UDFN3HUFP5DTZDZEAWR6PJFJPA.jpeg",
    detail: "SR",
    price: 2500,
  },
  {
    id: 2,
    title: "Villa Rumipal",
    category: "Rosa",
    stock: 6,
    imgurl: "https://www.destinocordoba.com.ar/wp-content/uploads/2021/12/271134_1640707397.jpg",
    detail: "SR",
    price: 2300,
  },
  {
    id: 3,
    title: "Villa del dique",
    category: "Rosa",
    stock: 3,
    imgurl: "https://www.cordobaturismo.gov.ar/wp-content/uploads/2018/09/enes-1.jpg",
    detail: "SR",
    price: 3200,
  },
  {
    id: 4,
    title: "Alta Gracia",
    category: "Gracia",
    stock: 2,
    imgurl:"https://ruturviajes.com.ar/wp-content/uploads/2018/06/ARCHI_618020.jpg",
    detail: "AG",
    price: 2800,
  },
  {
    id: 5,
    title: "Miramar",
    category: "Miramar",
    stock: 7,
    imgurl:"https://www.lavoz.com.ar/resizer/HOFNHH-T3my6809OB_-esK7Ytis=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/ZAM2CVUQZFEFBC42OSN5H2JBMU.jpg",
    detail: "MM",
    price: 2600,
  },
];

const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(database);
    }, 2000);
  });
};

const getCity = (idURL) => {
  return new Promise((resolve, reject) => {
    const reqItem = database.find((item) => {
      return item.id === parseInt(idURL);
    });

    setTimeout(() => {
      if (reqItem) resolve(reqItem);
      else reject("No se encontró el producto");
    }, 2000);
  });
};

const getCityByCategory = (categoryURL) => {
  return new Promise((resolve, reject) => {
    let reqItems = database.filter((item) => item.category === categoryURL);

    setTimeout(() => {
      resolve(reqItems);
    }, 2000);
  });
};

export default obtenerProductos;

export { getCity, getCityByCategory };
