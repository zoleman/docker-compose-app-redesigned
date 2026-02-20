# --------- Dev Stage ---------
FROM maven:3.9.9-amazoncorretto-23-debian-bookworm AS dev
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
CMD ["mvn", "spring-boot:run", "-Dspring-boot.run.profiles=dev"]

# --------- Build Stage ---------
FROM maven:3.9.9-amazoncorretto-23-debian-bookworm AS build
WORKDIR /app
COPY pom.xml .
COPY src/ ./src
RUN mvn clean package -DskipTests

# --------- Runtime Stage ---------
FROM eclipse-temurin:23-jre-alpine AS runtime
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
