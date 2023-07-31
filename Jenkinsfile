pipeline {
    agent any

    stages {
        stage('SCM Checkout') {
            steps {
                // Checkout the source code from your version control system (e.g., Git)
                // Replace 'your-repo-url' with the actual URL of your repository
                git 'https://github.com/AutomateXs/3DCX_AllHands.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image and tag it as '3dcx_automate'
                sh 'sudo docker build -t 3dcx_automate .'
            }
        }

        stage('Run Docker Container') {
            steps {
                // Run the Docker container with port mapping 3000:1234
                sh 'sudo docker run -p 3000:1234 -d 3dcx_automate'
            }
        }
    }
}

