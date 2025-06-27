import { useEffect, useState } from 'react';
import CarCard from './CarCard';
import Navbar from './Navbar';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {cars.map(car => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </>
  );
}

export default CarList;
