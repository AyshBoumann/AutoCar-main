// CarForm.jsx
import React, { useState } from "react";

const CarForm = ({ addCar }) => {
  const [car, setCar] = useState({ name: "", year: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (car.name && car.year) {
      addCar(car);
      setCar({ name: "", year: "" }); // Resetar o formulário
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nome do carro"
        value={car.name}
        onChange={(e) => setCar({ ...car, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Ano"
        value={car.year}
        onChange={(e) => setCar({ ...car, year: e.target.value })}
        required
      />
      <button type="submit">Adicionar Carro</button>
    </form>
  );
};

export default CarForm;