const Products = [
  {
    id: 0,
    name: "Black Car",
    price: 300,
    description: "lorem ipsum doler si amet",
    category: "Vehicle",
    onSell: true,
    onSellPercentage: 20,
    get onSellPrice() {
      return (this.price * (this.onSellPercentage / 100)).toFixed(2);
    },
    image: "https://i.ibb.co/92QFzsg/car.jpg",
    count: 1,
  },
  {
    id: 1,
    name: "Beat AirPhone",
    price: 100,
    description: "lorem ipsum doler si amet",
    category: "Headphone",
    onSell: false,
    onSellPercentage: 0,
    get onSellPrice() {
      return (this.price * (this.onSellPercentage / 100)).toFixed(2);
    },
    image: "https://i.ibb.co/mGXCzjq/headphone.jpg",
    count: 1,
  },
];

export default Products;
