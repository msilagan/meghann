package models

import "database/sql"

// Resume represents a person's resume
type Resume struct {
	ID         int    `json:"id"`
	Name       string `json:"name"`
	Email      string `json:"email"`
	Summary    string `json:"summary"`
	Experience string `json:"experience"`
	Education  string `json:"education"`
}

// CreateResumesTable creates the resumes table if it doesn't exist
func CreateResumesTable(db *sql.DB) error {
	query := `
    CREATE TABLE IF NOT EXISTS resumes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        summary TEXT,
        experience TEXT,
        education TEXT
    );
    `
	_, err := db.Exec(query)
	return err
}
