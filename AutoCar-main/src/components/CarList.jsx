// CarList.jsx
import React from "react";

const CarList = ({ cars }) => {
  return (
    <div>
      {cars.length > 0 ? (
        <ul>
          {cars.map((car, index) => (
            <li key={index}>
              {car.name} - {car.year}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum carro encontrado.</p>
      )}
    </div>
  );
};

export default CarList;