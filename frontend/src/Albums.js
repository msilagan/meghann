import React, { useState, useEffect } from 'react';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch albums only when the component mounts
        const fetchAlbums = async () => {
            try {
                const response = await fetch("http://localhost:8080/albums");
                const data = await response.json();
                setAlbums(data); // Set albums in state
                setLoading(false); // Set loading to false after data is fetched
            } catch (err) {
                setError(err); // Handle any errors
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []); // Empty dependency array ensures this runs only once

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading albums: {error.message}</div>;

    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>{album.title} - {album.artist}</li>
                ))}
            </ul>
        </div>
    );
};

export default Albums;
