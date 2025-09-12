import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function AnimalData() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("animalData")) || [];
    setAnimals(stored);
  }, []);

  const categoryCount = animals.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
            My Animals
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Category Summary:
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              {Object.entries(categoryCount).map(([type, count]) => (
                <li key={type}>
                  {type}: {count}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Animal Details:
            </h3>
            <ul className="divide-y divide-gray-200">
              {animals.map((animal, index) => (
                <li key={index} className="py-2">
                  <strong>{animal.animalId}</strong> — {animal.type},{" "}
                  {animal.breed}, {animal.age}, {animal.gender}, {animal.weight}
                  kg, {animal.health}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AnimalData;
