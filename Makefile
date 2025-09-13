# Variables
BACKEND_DIR=server
FRONTEND_DIR=frontend
GO=go
NPM=npm

# Port Numbers
BACKEND_PORT=8080
FRONTEND_PORT=5173

# Backend
backend:
	cd $(BACKEND_DIR) && $(GO) run main.go

# Frontend
frontend:
	cd $(FRONTEND_DIR) && $(NPM) run dev

# Run both (requires 'concurrently' installed globally or locally in frontend)
dev:
	cd $(FRONTEND_DIR) && $(NPM) install concurrently --save-dev
	cd $(FRONTEND_DIR) && npx concurrently \
		"cd ../$(BACKEND_DIR) && $(GO) run main.go" \
		"$(NPM) run dev --prefix ../$(FRONTEND_DIR)"

# Build frontend
build-frontend:
	cd $(FRONTEND_DIR) && $(NPM) run build

# Build backend (just an example, adjust to your binary name)
build-backend:
	cd $(BACKEND_DIR) && $(GO) build -o server main.go

# Clean
clean:
	rm -rf $(FRONTEND_DIR)/dist
	rm -rf $(FRONTEND_DIR)/node_modules/.cache
	rm -rf $(BACKEND_DIR)/server

# Deploy
deploy:
	cd $(FRONTEND_DIR) && $(NPM) run deploy

# Kill processes occupying the ports (8080 for backend, 3000 for frontend)
.PHONY: kill
kill:
	@echo "Killing processes occupying ports $(BACKEND_PORT) and $(FRONTEND_PORT)..."
	# Kill process using port 8080 (Backend)
	@kill -9 $$(lsof -t -i :$(BACKEND_PORT)) || true
	# Kill process using port 3000 (Frontend)
	@kill -9 $$(lsof -t -i :$(FRONTEND_PORT)) || true
	@echo "Ports $(BACKEND_PORT) and $(FRONTEND_PORT) have been cleared."