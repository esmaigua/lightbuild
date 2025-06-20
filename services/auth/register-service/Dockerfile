FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY target/register-service-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app.jar"]
