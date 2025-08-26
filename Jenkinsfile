pipeline {
    
    agent any
    environment {
        DOCKER = '/usr/local/bin/docker'
    }
    options {
        skipDefaultCheckout(true)
    }
    stages {
        stage("Build") {
            steps {
                cleanWs()
                checkout scm
                echo "building..."
                sh '${DOCKER} ps'
                sh '${DOCKER} images'
                sh '${DOCKER} run -d -p 5173:5173 --name node_app node'
            }
        }
    }
    post {
        always {
            sh '${DOCKER} rm -f node_app || true'
            cleanWs()
        }
    }
}