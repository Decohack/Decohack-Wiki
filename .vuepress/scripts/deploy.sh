cd /Users/viggozhang/Documents/DecoHack/Decohack-Wiki
cd .vuepress
rm -rf dist

cd /Users/viggozhang/Documents/DecoHack/Decohack-Wiki
npm run build

git init
git add -A
git commit -m 'Made with ❤ in Shenzhen'
git push -f git@github.com:Decohack/Decohack-Wiki.git main:gh-pages

cd /Users/viggozhang/Documents/DecoHack/Decohack-Wiki/.vuepress
rm -rf dist

# cd .vuepress/dist
# echo 'wiki.decohack.com' > CNAME