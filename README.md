# personal boilerplate for next/koa

```js
const app = Next({ dev })
const server = Noa({
  handleStatic: app.getRequestHandler(),
  handlePages: app.render.bind(app)
})

app.prepare().then(() => server.listen(PORT, (err) => {}))
```

## next.js

#### directory
- pages
- [static](https://github.com/zeit/next.js/#static-file-serving-eg-images)

#### app.getRequestHandler() / handleRequest(req, res, parsedUrl)

[index.js#L86](https://github.com/zeit/next.js/blob/53a2c5a7fc14dd7b6a32ed27080534eefd2362f8/server/index.js#L86)

#### app.render(req, res, pathname, query, parsedUrl)
[index.js#L293](https://github.com/zeit/next.js/blob/53a2c5a7fc14dd7b6a32ed27080534eefd2362f8/server/index.js#L293)

## heroku
- [Error: Cannot find module when deploying to heroku](https://github.com/zeit/next.js/issues/198#issuecomment-299738100)
- [Heroku-specific build steps](https://devcenter.heroku.com/articles/nodejs-support#heroku-specific-build-steps)
- [Build behavior](https://devcenter.heroku.com/articles/nodejs-support#build-behavior)
> If a yarn.lock file is detected in the root of the project, yarn is used for installing dependencies and running scripts. Otherwise, npm is used.

## circleci
- [Migrating from 1.0 to 2.0](https://circleci.com/docs/2.0/migrating-from-1-2/)
- [2.0 Project Tutorial](https://circleci.com/docs/2.0/project-walkthrough/)
- [Sample 2.0 config.yml File](https://circleci.com/docs/2.0/sample-config/)
- [Writing Jobs with Steps](https://circleci.com/docs/2.0/configuration-reference/)
- [Orchestrating Workflows](https://circleci.com/docs/2.0/workflows/)
- [Deployment Integrations](https://circleci.com/docs/2.0/deployment_integrations/)

> `jobs` are a collection of Steps.
> `steps` are a collection of executable commands which are run during a job.
> https://circleci.com/docs/2.0/sample-config/
>
> `workflows` are sets of rules for defining a collection of `jobs` and their run order that shortens the feedback loop.
> https://circleci.com/docs/2.0/workflows/#overview
>
> **Note**: CircleCI 2.0 does not yet support seamlessly integrated Heroku and AWS deployments. Keys and configuration added to the Heroku Deployment and AWS CodeDeploy pages in CircleCI are currently not available to 2.0 jobs.
> https://circleci.com/docs/2.0/project-walkthrough/#deploying-to-heroku
