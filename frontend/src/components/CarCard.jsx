function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{car.brand} {car.model}</h2>
      <p className="text-gray-600">Year: {car.year}</p>
      <p className="text-sm text-gray-500">{car.specs}</p>
    </div>
  );
}

export default CarCard;
