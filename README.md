# SHA Portfolio

LiveSite Url: https://sayyedhammadali.github.io/sha-portfolio

## Configuration

1. npm i gh-pages

2. Edit package.json file
```

"scripts": {
  "deploy":"yarn run build && gh-pages -d build"
},
"homepage": "https://sayyedhammadali.github.io/sha-portfolio",

```

For Custom Domain

```

"scripts": {
  "deploy":"yarn run build && gh-pages -d build"
},
"homepage": "https://<custom_domain>",

```

3. yarn run deploy
