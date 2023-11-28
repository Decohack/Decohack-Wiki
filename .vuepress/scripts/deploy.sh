npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Decohack/Decohack-Wiki.git gh-pages

cd ../
rm -rf dist