import angleSoft from "../../assets/angleSoft.jpeg"; 
import melon from "../../assets/melon.jpeg";
import oil from "../../assets/oil.jpeg";
import pizza from "../../assets/pizza.jpeg";
import juice from "../../assets/juice.jpeg";
import Organic from "../../assets/Organic.svg";
import NewArrivalCard from "./NewArrivalCard";

export default function NewArrivalData() {
  const cardsData = [
    {
      image: oil,
      discount: "75%",
      tagIcon: Organic,
      tagText: "ORGANIC",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      price: "$0.50",
      originalPrice: "$1.99",
    },
    {
      image: pizza,
      discount: "50%",
      tagIcon: Organic,
      tagText: "NATURAL",
      title: "Organic Coconut Oil – 32 fl oz Bottle",
      price: "$1.00",
      originalPrice: "$2.50",
    },
    {
      image: juice,
      discount: "30%",
      tagIcon: Organic,
      tagText: "VEGAN",
      title: "Almond Milk – 64 fl oz Carton",
      price: "$1.20",
      originalPrice: "$1.99",
    },
    {
      image: pizza,
      discount: "25%",
      tagIcon: Organic,
      tagText: "GLUTEN",
      title: "Quinoa Pasta – 16 oz Pack",
      price: "$2.00",
      originalPrice: "$3.00",
    },
    {
      image: melon,
      discount: "40%",
      tagIcon: Organic,
      tagText: "SUGAR",
      title: "Dark Chocolate Bars – 12 oz Pack",
      price: "$3.50",
      originalPrice: "$5.00",
    },
    {
      image: angleSoft,
      discount: "60%",
      tagIcon: Organic,
      tagText: "DAIRY",
      title: "Oat Milk – 32 fl oz Carton",
      price: "$1.50",
      originalPrice: "$3.00",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6  ">
      {cardsData.map((card, index) => (
        <NewArrivalCard
          key={index}
          image={card.image}
          discount={card.discount}
          tagIcon={card.tagIcon}
          tagText={card.tagText}
          title={card.title}
          price={card.price}
          originalPrice={card.originalPrice}
        />
      ))}
    </div>
  );
}
