# syntax=docker/dockerfile:1
# check=error=true

# Use a Node.js base image
FROM node:23.6.1-bookworm-slim

# Rails app lives here
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy application code
COPY . .

# Copy the rest of the application code
COPY . .

# Build the Vue.js application for production
RUN npm run build

# Expose the port that the Vite server will run on
EXPOSE 8000

# Start the Vite server in production mode
CMD ["npm", "run", "preview"]
