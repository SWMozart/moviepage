FROM openjdk:17

LABEL maintainer="test@User91.de"

ADD backend/target/moviebankpage.jar moviebankpage.jar

CMD [ "sh", "-c", "java -DServer.port=$PORT -jar /moviebankpage.jar"]