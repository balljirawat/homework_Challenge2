
import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [carData, setCarData] = useState();

  const getCar = async () => {
    const response = await fetch(
      "https://api.jsonbin.io/b/5f33f98ddddf413f95c2b306",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "secret-key":
            "$2b$10$0ve8/zpqfEF0X1kZ0TdfW.ehq645eiEhc.OykoUZABVEdE8D3bpr2",
        },
      }
    );
    const res = await response.json();
    setCarData(res);
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <div className="App">
      <div className="container">
        {carData ? (
          carData.map((car) => {
            if (car.year >= 2000 && car.year <= 2007) {
              return <Card car={car}></Card>
            } else {
              return <></>
            }
          })
        ) : (<></>)}
      </div>
    </div>
  );
}

export default App