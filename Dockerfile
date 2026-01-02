# === Stage 1: Build the Vite application ===
# Use a recent Node.js image as the builder stage
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker's layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the app for production (outputs to the 'dist' folder by default)
RUN npm run build

# === Stage 2: Serve the static files with Nginx ===
# Use a lightweight Nginx image to serve the static assets
FROM nginx:alpine

# Copy the build files from the 'builder' stage to Nginx's default web directory
COPY --from=builder /dist /usr/share/nginx/html

# Expose port 80, where Nginx serves the application
EXPOSE 80

# Command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]