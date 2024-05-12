 # Instructions Docker (More instructions are @ `https://github.com/monir-tuhin/angular-docker-rnd`)
- First create a project from spring initializer of java `11` version and spring boot `2.7.13` version
- Create a sample api to test the project with run
- Open terminal and go to project folder location
- `maven > lifecycle > clean and install` : To create jar file in target folder
- `docker build -t spring-boot-docker.jar .` : Build the docker image
- `docker image ls` : To show all docker images
- `docker rmi {imageId}` : To remove specific image
- `docker run -p 9090:8080 spring-boot-docker.jar` : To run docker project. Here 9090 is container port and 8080 is local port
- `sudo docker run -t -p 8080:8080 --name spring-boot-docker-cont spring-boot-docker-img` : To run docker project. Here 8080 is container port and also local port. 'spring-boot-docker-cont' is container name
- `docker login` : To login docker hub account in to local machine
- `docker push userName/spring-boot-docker.jar` : To push docker image in to docker hub
- `docker pull userName/spring-boot-docker.jar:<tag_name>` : To pull docker hub's image in to local machine. `latest` is default tag
- `docker rmi -f <image_id>`: To delete specific image forcely
- `docker run -p 9090:8080 monirzaman/spring-boot-docker:<tag_name>`: If we don't provide any tag name then by default `latest` tag will apply
- `Build and push Spring Boot Docker images using Maven plugin` : Added configuration in `pom.xml` file


# Instructions Jenkins: Download and Install
- `sudo apt update` & `sudo apt install -y docker.io`:  check and download docker if you have no docker install in your pc
- `sudo systemctl start docker` & `sudo systemctl enable docker` : Start the Docker service Once Docker is installed, you'll need to start the Docker service and enable it to start on boot.
- `sudo docker pull jenkins/jenkins`: Pull the Jenkins Docker official Image from docker hub
- `sudo docker volume create jenkins_home`: Create a Docker volume (Optional but recommended)
- `sudo docker run -d -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home --name jenkins jenkins/jenkins` : Run Jenkins Container
-  Access Jenkins : Once the container is running, you can access Jenkins by opening your web browser and navigating to http://localhost:8080.
- `sudo docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword` : Unlock Jenkins. During the first visit, Jenkins will ask you to unlock it using an initial administrator password. To obtain the password, run the following command.
