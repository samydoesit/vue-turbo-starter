package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fileServer := http.FileServer(http.Dir("./web-root"))
	http.Handle("/", fileServer)
	fmt.Printf("Starting server at port 6006\n")
	if err := http.ListenAndServe(":6006", nil); err != nil {
		log.Fatal(err)
	}
}
