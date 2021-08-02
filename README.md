
# Lightning Talk


### Example: Node REST API on AWS Serverless Framework

This template demonstrates how to make a simple REST API with Node.js running on AWS Lambda and API Gateway using the traditional [Serverless Framework](https://www.serverless.com).

This template is based on the [Node REST API on AWS](https://github.com/serverless/examples/tree/master/aws-node-rest-api) example. It does not include any kind of persistence (database).

### Create Project

```
sls create --name YOUR_PROJECT_NAME --template-url PROJECT_TEMPLATE_URL
```

### Deployment

```
$ serverless login
$ serverless deploy -v
```

### Stack Removal

```
$ serverless remove -v
```
