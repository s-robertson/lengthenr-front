#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    eval "$(ssh-agent -s)"

    ls -al ~/.ssh
    echo "=================================="

    npm run prod

    cd dist
    git init

    chmod 600 ~/.ssh/deploy-key
    ssh-add ~/.ssh/deploy-key

    git add .
    git config user.name "Travis CI"
    git config user.email "srobertson203@gmail.com"
    git commit -m "Deployment"
    git remote add deploy "lengthenr@robotscostrent.com:/var/www/lengthenr"
    git push --force deploy master
else
    echo "Not deploying, since this branch isn't master."
fi
