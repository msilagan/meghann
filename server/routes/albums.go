package routes

import (
	"database/sql"
	"net/http"
	"server/models"

	"github.com/gin-gonic/gin"
)

// package-level db variable accessible by all handlers
var db *sql.DB

// Init initializes the package-level db connection
func ConnectDB(dbConn *sql.DB) {
	db = dbConn
}

// Register Routes
func RegisterAlbumRoutes(r *gin.Engine) {
	r.GET("/albums", GetAlbums)
	r.GET("/albums/:id", GetAlbumByID)
	r.POST("/albums", PostAlbums)
}

// GetAlbums handles GET /albums
func GetAlbums(c *gin.Context) {
	rows, err := db.Query("SELECT id, title, artist, fave, release_year FROM albums")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var albums []models.Album
	for rows.Next() {
		var alb models.Album
		if err := rows.Scan(&alb.ID, &alb.Title, &alb.Artist, &alb.Fave, &alb.ReleaseYear); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		albums = append(albums, alb)
	}
	c.JSON(http.StatusOK, albums)
}

// GetAlbumByID handles GET /albums/:id
func GetAlbumByID(c *gin.Context) {
	id := c.Param("id")

	var alb models.Album
	err := db.QueryRow("SELECT id, title, artist, fave, release_year FROM albums WHERE id = ?", id).
		Scan(&alb.ID, &alb.Title, &alb.Artist, &alb.Fave, &alb.ReleaseYear)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusNotFound, gin.H{"error": "Album not found"})
		return
	} else if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, alb)
}

// PostAlbums handles POST /albums
func PostAlbums(c *gin.Context) {
	var newAlbum models.Album
	if err := c.BindJSON(&newAlbum); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}

	res, err := db.Exec(
		"INSERT INTO albums (title, artist, fave, release_year) VALUES (?, ?, ?, ?)",
		newAlbum.Title, newAlbum.Artist, newAlbum.Fave, newAlbum.ReleaseYear,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	id, err := res.LastInsertId()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	newAlbum.ID = int(id)
	c.JSON(http.StatusCreated, newAlbum)
}
