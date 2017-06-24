# cleanup last version
rm -rf __deployme
mkdir __deployme

# build
sh scripts/build.sh

# copy js
cp bundle.js __deployme/bundle.js
# copy css
cp bundle.css __deployme/bundle.css
# copy html and images
cp index.html __deployme/index.html
cp -r images/ __deployme/images/

# done
date; echo;