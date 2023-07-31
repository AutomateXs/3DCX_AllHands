# Use an official Node runtime as the base image
FROM node:20.5.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the React app will run
EXPOSE 1234

# Command to start the React app
CMD ["npm", "start"]
