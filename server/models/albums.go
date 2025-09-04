package models

// album represents data about a record album.
type Album struct {
	ID     string `json:"id"`
	Title  string `json:"title"`
	Artist string `json:"artist"`
	Fave   string `json:"fave"`
}

// albums slice to seed record album data.
var Albums = []Album{
	{ID: "1", Title: "Anti", Artist: "Rihanna", Fave: "Love on the Brain"},
	{ID: "2", Title: "Swimming", Artist: "Mac Miller", Fave: "2009"},
	{ID: "3", Title: "Blonde", Artist: "Frank Ocean", Fave: "Ivy"},
}
