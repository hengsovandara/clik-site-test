
## **README**

### Installation

* Install Node Package Manager(NPM)
* Install the [Gatsby-Cli](https://www.npmjs.com/package/gatsby-cli) `npm install --global gatsby-cli`

### Install npm in project

* run command in project: `npm install`

### Run Project

* run command: `gatsby develop`

* Open your browser and point to [http://localhost:8000](http://localhost:8000)

### Build Project

* run command: `gatsby build`

### Run Project as final serve

* run command: `gatsby serve`

* Open your browser and point to [http://localhost:9000](http://localhost:9000)

### Deploy to AWS S3

NOTE: Make sure you build and serve (to test) the project first before running the deployment scripts

#### Need AWS-cli

* Install [aws-cli](https://github.com/aws/aws-cli)

* Config following the document in [aws-cli](https://github.com/aws/aws-cli)

#### Command deploy to S3

`aws s3 cp public s3://clik-asia/ --recursive`

#### Command Sync to S3

`aws s3 sync public s3://clik-asia/ --exclude *.tmp`
