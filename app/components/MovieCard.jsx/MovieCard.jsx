export default function MovieCard({ title, image, year }) {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-white text-lg font-bold">{title}</h2>
          <p className="text-gray-400">{year}</p>
        </div>
      </div>
    );
  }
  