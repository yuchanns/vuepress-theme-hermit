pipeline {
   agent { docker 'circleci/node:10' }

   stages {
      stage('Build') {
         steps {
            sh 'yarn install --frozen-lockfile'
            sh 'yarn build'
         }
      }
   }
}