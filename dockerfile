# Specify the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Bundle app source inside Docker image
COPY . .

# Build the application
RUN yarn run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]
