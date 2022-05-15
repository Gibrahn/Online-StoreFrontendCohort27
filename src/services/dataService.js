import axios from "axios";

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
  async getCatalog() {
    //get the catalog from the server
    // ad return the list of products
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    return response.data;
    //testing only
    //return mockCatalog;
  }

  async getCoupons() {
    console.log("calling server");

    let response = await axios.get("http://127.0.0.1:5000/api/couponCodes");
    console.log("retrieved", response.data);
    return response.data;
  }

  async saveCoupon(coupon) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/couponCodes",
      coupon
    );
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/catalog",
      product
    );
    return response.data;
  }
}

export default DataService;
