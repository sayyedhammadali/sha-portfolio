# SHA Portfolio

LiveSite Url: https://sayyedhammadali.github.io/shaportfolio

## Configuration

1. npm i gh-pages

2. Edit package.json file
```

"scripts": {
  "deploy":"npm run build && gh-pages -d build"
},
"homepage": "https://sayyedhammadali.github.io/shaportfolio",

```
3. npm run deploy