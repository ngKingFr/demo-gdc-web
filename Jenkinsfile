node {

   env.NODE_HOME="${tool 'node-7.X'}"
   env.PATH="${env.NODE_HOME}/bin:${env.PATH}"
   git([url: 'https://github.com/ngKingFr/demo-gdc-web.git', branch: 'master'])
   credentials('git-gdc-demo')

   triggers {
        cron(H/1 * * * *)
   }

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