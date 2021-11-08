const Products = [
  {
    id: 0,
    name: "Black Car",
    price: 300,
    description: "lorem ipsum doler si amet",
    category: "Vehicle",
    onSell: true,
    onSellPercentage: 20,
    onSellPrice: function () {
      return (this.price * (this.onSellPercentage / 100)).toFixed(2);
    },
    image: "https://i.ibb.co/92QFzsg/car.jpg",
  },
];

export default Products;
