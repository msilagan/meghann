package main

import (
	"net/http"

	"backend/routes"

	"github.com/gin-gonic/gin"
)

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

	// Albums
	router.GET("/albums", routes.GetAlbums)
	router.GET("/albums/:id", routes.GetAlbumByID)
	router.POST("/albums", routes.PostAlbums)

	return router
}

func main() {
	r := setupRouter()
	// Listen and Server in 0.0.0.0:8080
	r.Run(":8080")
}
