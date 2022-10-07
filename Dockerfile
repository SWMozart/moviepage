FROM openjdk:17

LABEL maintainer="witt.seb@outlook.de"

ADD backend/target/moviebankpage.jar moviebankpage.jar

CMD [ "sh", "-c", "java -DServer.port=$PORT -jar /moviebankpage.jar"]