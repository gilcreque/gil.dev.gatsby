---
title: "Bitbucket Pipeline Failure Deploying to Firebase"
date: "2019-11-01"
coverImage: "bitbucket-pipeline-failure-deploying-to-firebase.png"
---

After a recent push in our `develop` branch our Bitbucket pipeline was complaining that it could not deploy to Firebase. The dev team was perplexed because we had built the branch several times locally and manually deployed with no problems. Here is the command we were running:

```
firebase deploy --token=$FIREBASE_DEPLOY_TOKEN --project project-name --non-interactive
```

Here is the error we were receiving:

```
Error: Error occurred while parsing your function triggers. Error: @grpc/grpc-js only works on Node ^8.13.0 || >=10.10.0
at Object.<anonymous>
(/opt/atlassian/pipelines/agent/build/functions/node_modules/@grpc/grpc-js/build/src/index.js:47:11)     at Module._compile
(internal/modules/cjs/loader.js:689:30)     at Object.Module._extensions..js
(internal/modules/cjs/loader.js:700:10)     at Module.load
(internal/modules/cjs/loader.js:599:32)     at tryModuleLoad
(internal/modules/cjs/loader.js:538:12)     at Function.Module._load
(internal/modules/cjs/loader.js:530:3)     at Module.require
(internal/modules/cjs/loader.js:637:17)     at require
(internal/modules/cjs/helpers.js:20:18)     at Object.<anonymous>
(/opt/atlassian/pipelines/agent/build/functions/node_modules/google-gax/build/src/grpc.js:37:14)     at Module._compile
(internal/modules/cjs/loader.js:689:30)
```

We started barking up the wrong tree and thought maybe the version of Node set in our Firebase functions was the issue. It actually turned out to be the version of Node set in our Bitbucket Pipeline YAML. We had recently updated our local dev environments to use Node [v10.17.0, the LTS for version 10 of Node](https://nodejs.org/en/blog/release/v10.17.0/) (Firebase is maxed out at using 10 for now). We had forgotten to update the Bitbucket image. We fixed it by updating our `bitbucket-pipelines.yml` in our project like so:

```
image: node:10.17.0
```

The new deploy ran perfectly!
