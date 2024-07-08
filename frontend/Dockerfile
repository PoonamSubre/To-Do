# Use Node.js as the base image for the frontend
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend application to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Expose the port that the React application will run on
EXPOSE 3000

# Serve the React application using serve when the container starts
CMD ["npm", "run", "start:prod"]
