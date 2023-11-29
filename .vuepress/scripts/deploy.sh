npm run build

cd dist

git init
git add -A
git commit -m 'Made with ❤ in Shenzhen'
git push -f git@github.com:Decohack/Decohack-Wiki.git main:gh-pages

cd ../
rm -rf dist