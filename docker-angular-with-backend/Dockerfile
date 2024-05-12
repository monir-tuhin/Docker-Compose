### Stage 1: Build ###
FROM node:18.16.0-alpine AS builder
WORKDIR /app
RUN npm cache clean --force
COPY . .
RUN npm i && npm run ng build

### Stage 2: Build ###
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
COPY --from=builder /app/dist/docker-angular-with-backend/browser .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

