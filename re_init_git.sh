rm -rf .git

git init
git config user.email "abhinavdubey8989@gmail.com"
git config user.name "abhinavdubey8989"
git remote add origin https://github.com/abhinavdubey8989/kafka-setup.git

./git_ops.sh 1st_commit


git checkout -b main
git branch -D master
git push -f origin main