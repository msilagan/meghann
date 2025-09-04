package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// album represents data about a record album.
type album struct {
	ID     string `json:"id"`
	Title  string `json:"title"`
	Artist string `json:"artist"`
	Fave   string `json:"fave"`
}

// albums slice to seed record album data.
var albums = []album{
	{ID: "1", Title: "Anti", Artist: "Rihanna", Fave: "Love on the Brain"},
	{ID: "2", Title: "Swimming", Artist: "Mac Miller", Fave: "2009"},
	{ID: "3", Title: "Blonde", Artist: "Frank Ocean", Fave: "Ivy"},
}

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, albums)
}

func setupRouter() *gin.Engine {
	// Disable Console Color
	// gin.DisableConsoleColor()
	router := gin.Default()

	// Home
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello World!")
	})

	// Ping test
	router.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	// Get Albums
	router.GET("/albums", getAlbums)

	return router
}

func main() {
	r := setupRouter()
	// Listen and Server in 0.0.0.0:8080
	r.Run(":8080")
}
