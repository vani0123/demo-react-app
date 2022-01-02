pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('node:16.13.1-alpine').inside {             
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
        stage('docker build/push') {
            steps {
                script {
                    docker.withRegistry('http://172.19.27.40:30002/harbor/registries', 'harboradmin') {
                        def app = docker.build("vani-docker/docker-nodejs-demo:1.0.0-SNAPSHOT", '.').push()
                    }
                }
            }                                     
        }
    }
}
