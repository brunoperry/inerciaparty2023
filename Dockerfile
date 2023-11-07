# FROM alpine
FROM arm64v8/alpine

RUN apk --no-cache add --virtual builds-deps build-base python3
RUN apk --no-cache add --update npm

# Setup project structure
COPY . /app
WORKDIR /app

# Build project code (in the image itself)
RUN npm ci

EXPOSE 80

# Run app
CMD ["npm", "start"]
