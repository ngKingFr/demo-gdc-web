node {

    stage('checkout') {
        sh 'npm --version'
        sh 'node --version'
    }

    stage('install'){
        sh 'npm install'
    }

    stage('build') {

        sh 'ng build -prod'
    }
}