node {


   env.NODE_HOME="${tool 'node-8.X}"
    env.PATH="${env.NODE_HOME}/bin:${env.PATH}"
    sh 'npm -version'

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