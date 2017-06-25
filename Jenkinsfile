pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                sh 'npm --version'
              	sh 'node --version'
            }
        }
        stage('install'){
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'ng build -prod'
            }
        }
    }
}