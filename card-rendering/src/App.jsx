import React from "react";
import Card from "./Card";
import "./App.css";

function App() {

  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1 description",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=200"
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2 description",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200"
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3 description",
      image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=200"
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4 description",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=200"
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is card 5 description",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200"
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is card 6 description",
      image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=200"
    },
    {
      id: 7,
      title: "Card 7",
      description: "This is card 7 description",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=200"
    },
    {
      id: 8,
      title: "Card 8",
      description: "This is card 8 description",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=200"
    },
    {
      id: 9,
      title: "Card 9",
      description: "This is card 9 description",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200"
    },
    {
      id: 10,
      title: "Card 10",
      description: "This is card 10 description",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=200"
    },
    {
      id: 11,
      title: "Card 11",
      description: "This is card 11 description",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=200"
    },
    {
      id: 12,
      title: "Card 12",
      description: "This is card 12 description",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200"
    }

  ];

  return (
    <div className="container">

      <h2>All the cards are here.</h2>

      <div className="card-container">

        {cardData.map((item) => (
          <Card key={item.id} card={item} />
        ))}

      </div>

    </div>
  );
}

export default App;
