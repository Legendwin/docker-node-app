# Docker Assignment

## Overview
This repository contains the Docker assignment for CSBC 252 - Introduction to Cloud Computing. The goal is to demonstrate basic Docker concepts such as building images, running containers, and using containerized applications.

## Contents
- `Dockerfile` - Defines the Docker image for the application.
- `public/` - Static application files and assets.
- `README.md` - Project documentation.

## Folder Structure
```
docker
├── Dockerfile
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   └── style.css
└── server.js
```

## Prerequisites
- Docker installed on your system.
- Basic understanding of Docker images and containers.

## Build and Run
1. Open a terminal in this folder.
2. Build the Docker image:
   ```bash
   docker build -t node-app .
   ```
3. Run the container:
   ```bash
   docker run --rm -p 3000:3000 --name node-docker-assignment node-app
   ```
4. Open the application in your browser at `http://localhost:3000`.

## Notes
- Adjust port mapping and image names as needed.
- Review the Dockerfile to understand how the image is built.
- Clean up containers and images after testing:
  ```bash
    docker ps -a
    docker rm <container-id>
    docker rmi <image-id>
    ```