git checkout deploy
git pull origin master
git commit -am "Deploying to Heroku on " date +%x_%H:%M:%S:%N
git push
git checkout master
