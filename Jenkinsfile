node {

   env.NODE_HOME="${tool 'node-7.X'}"
   env.PATH="${env.NODE_HOME}/bin:${env.PATH}"

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