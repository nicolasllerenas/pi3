export default function Card({ name, age, description, image }) {
  return (
    <div className="relative w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h2 className="text-white text-xl font-bold">
          {name}, {age}
        </h2>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
}
