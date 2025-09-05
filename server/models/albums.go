package models

import "database/sql"

// album represents data about a record album.
type Album struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Artist      string `json:"artist"`
	Fave        string `json:"fave"`
	ReleaseYear int    `json:"release_year"`
}

func CreateAlbumsTable(db *sql.DB) error {
	query := `
    CREATE TABLE IF NOT EXISTS albums (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        artist TEXT NOT NULL,
        fave TEXT,
        release_year INTEGER
    );
    `
	_, err := db.Exec(query)
	return err
}

// albums slice to seed record album data.
func SeedAlbums(db *sql.DB) error {
	albums := []Album{
		{Title: "Anti", Artist: "Rihanna", Fave: "Love on the Brain", ReleaseYear: 2016},
		{Title: "Swimming", Artist: "Mac Miller", Fave: "2009", ReleaseYear: 2018},
		{Title: "Blonde", Artist: "Frank Ocean", Fave: "Ivy", ReleaseYear: 2016},
	}

	for _, album := range albums {
		_, err := db.Exec(`
            INSERT INTO albums (title, artist, fave, release_year)
            VALUES (?, ?, ?, ?)`,
			album.Title, album.Artist, album.Fave, album.ReleaseYear)
		if err != nil {
			return err
		}
	}

	return nil
}
