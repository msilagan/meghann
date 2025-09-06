# Makefile

# Path to the server and frontend directories
FRONTEND_DIR=frontend
BACKEND_DIR=server

# Go binary and React binary paths
GO=go
NPM=npm

# Port Numbers
BACKEND_PORT=8080
FRONTEND_PORT=3000

# Binary file for Go
GO_BIN=server/app

# Default target - runs both frontend and backend
.PHONY: all
all: build-backend build-frontend

# Backend - Build and run the Go server
.PHONY: build-backend
build-backend:
	@echo "Building backend..."
	cd $(BACKEND_DIR) && $(GO) build -o $(GO_BIN) main.go

run-backend:
	@echo "Running backend..."
	cd $(BACKEND_DIR) && $(GO) run main.go

# Frontend - Build and run the React app
.PHONY: build-frontend
build-frontend:
	@echo "Building frontend..."
	cd $(FRONTEND_DIR) && $(NPM) install
	cd $(FRONTEND_DIR) && $(NPM) run build

start-frontend:
	@echo "Starting frontend..."
	cd $(FRONTEND_DIR) && $(NPM) start

# Start both frontend and backend concurrently using a background process for the backend
.PHONY: start
start:
	echo "Starting backend..."
	# Start backend in the background
	cd $(BACKEND_DIR) && $(GO) run main.go & \
	backend_pid=$$!; \
	echo "Backend running on http://localhost:8080 with PID $$backend_pid"; \
	# Give backend a few seconds to initialize
	sleep 3; \
	echo "Starting frontend..."; \
	# Start frontend in the background
	cd $(FRONTEND_DIR) && $(NPM) start & \
	frontend_pid=$$!; \
	# Wait for both frontend and backend processes
	wait $$backend_pid $$frontend_pid

# Clean up build artifacts
.PHONY: clean
clean:
	@echo "Cleaning up build artifacts..."
	rm -f $(GO_BIN)
	rm -rf $(FRONTEND_DIR)/node_modules
	rm -rf $(FRONTEND_DIR)/build

# Kill processes occupying the ports (8080 for backend, 3000 for frontend)
.PHONY: kill
kill:
	@echo "Killing processes occupying ports $(BACKEND_PORT) and $(FRONTEND_PORT)..."
	# Kill process using port 8080 (Backend)
	@kill -9 $$(lsof -t -i :$(BACKEND_PORT)) || true
	# Kill process using port 3000 (Frontend)
	@kill -9 $$(lsof -t -i :$(FRONTEND_PORT)) || true
	@echo "Ports $(BACKEND_PORT) and $(FRONTEND_PORT) have been cleared."

# Build both frontend and backend
.PHONY: build
build: build-backend build-frontend
