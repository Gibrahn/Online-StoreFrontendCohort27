let mockCatalog = [
  {
    _id: "1",
    title: "Nets Jersey",
    category: "NBA Jersey",
    price: 1,
    image: "download.jfif",
  },
  {
    _id: "2",
    title: "Bulls Jersey",
    category: "NBA Jersey",
    price: 1,
    image: "download(2).jfif",
  },
  {
    _id: "3",
    title: "Lakers Jersey",
    category: "NBA Jersey",
    price: 1,
    image: "download(1).jfif",
  },
];

class DataService {
  getCatalog() {
    //get the catalog from the server
    // ad return the list of products

    //testing only
    return mockCatalog;
  }
}

export default DataService;
