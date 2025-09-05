package models

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// InitDB opens the SQLite database connection, no tables created here
func InitDB(filepath string) (*sql.DB, error) {
	return sql.Open("sqlite3", filepath)
}
