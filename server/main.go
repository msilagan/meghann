package main

import (
	"database/sql"
	"log"
	"net/http"

	"server/models"
	"server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	_ "github.com/mattn/go-sqlite3"
)

func setupRouter(db *sql.DB) *gin.Engine {
	router := gin.Default()

	// Enable CORS for all origins
	router.Use(cors.Default())

	// Home
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello World!")
	})

	// Ping test
	router.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	// Pass db connection to routes package
	routes.ConnectDB(db)

	// Register all album routes
	routes.RegisterAlbumRoutes(router)

	return router
}

func setupDatabase(db *sql.DB) error {
	if err := models.CreateAlbumsTable(db); err != nil {
		return err
	}
	if err := models.CreateResumesTable(db); err != nil {
		return err
	}
	if err := models.SeedAlbums(db); err != nil {
		return err
	}
	return nil
}

func main() {
	db, err := models.InitDB("data.db")
	if err != nil {
		log.Fatal("Failed to open database:", err)
	}
	defer db.Close()

	if err := setupDatabase(db); err != nil {
		log.Fatal("Database setup failed:", err)
	}

	r := setupRouter(db)
	if err := r.Run(":8080"); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
