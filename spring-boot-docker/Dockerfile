# Build stage
FROM maven:3-openjdk-11 AS build
WORKDIR /app
COPY pom.xml .
# RUN mvn dependency:go-offline
COPY src ./src
# RUN --network=host mvn -f /app/pom.xml clean package
RUN mvn -f /app/pom.xml clean package

# Run stage
FROM adoptopenjdk/openjdk11
WORKDIR /home/project
COPY --from=build /app/target/*.jar ./app.jar
CMD ["java","-jar","app.jar"]



