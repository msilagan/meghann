import { useEffect, useState } from "react";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
        💖 Favorite Albums
      </h1>

      {albums.length === 0 ? (
        <div className="text-center text-gray-500">Loading albums...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {album.title}
                </h2>
                <p className="text-gray-600">{album.artist}</p>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                  Favorite Song: {album.fave}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
