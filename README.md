# bssoify

> 美团商家统一登录解决方案

商家用户中心：http://wiki.sankuai.com/pages/viewpage.action?pageId=111619997

## Usage

### 申请接入 ecom

- 申请接入 ecom：http://wiki.sankuai.com/pages/viewpage.action?pageId=178327792
- 申请接入开店宝：http://wiki.sankuai.com/pages/viewpage.action?pageId=364473273
- 示例 task：http://task.sankuai.com/browse/MAITON-550

相关 wiki：

- bbia：http://release.bbia.test.sankuai.info/
- ssoify：http://npm.sankuai.com/package/@mtfe/ssoify

### Install

```shell
npm install @mtfe/bssoify --save --registry=http://r.npm.sankuai.com
```

### Simple Example

```js
var http = require('http');
var bssoify = require('../bssoify')({
  key: 'maiton',
  secret: '29b4c64fd7a4e073b605df7470526d69',
});

http.createServer(function (req, res) {
  bssoify(req, res, function(err, bizacctData) {
    if (err) {
      console.error(err);
      res.writeHead(500);
      res.write('500 Internal Server Error');
      return res.end();
    }
    console.log(bizacctData);
    console.log(req.bizacctData);
    // Put your code here
    res.write(bizacctData);
    res.end();
  });
});
```

### Use with express

```js
var express = require('express');
var app = express();
var bssoify = require('../bssoify')({
  key: 'maiton',
  secret: '29b4c64fd7a4e073b605df7470526d69',
});

app.use(bssoify);
app.get('/', function (req, res) {
  console.log('req.bizacctData: ', req.bizacctData);
});
app.listen(8080);
```

For more examples, checkout examples.

## Contribution

### Testing

```shell
npm test
```

### Develop

1. 请在新分支开发，提 pr 到 master
2. 新功能需要有测试
3. 需要通过 castle ci 和至少一个人 approve 才可以 merge

### deploy

merge 之后，执行以下操作：

```shell
git checkout master
git pull
npm version <patch|minor|major>
git push
git push --tags
npm publish
```

注意：

- 版本号请遵循 semver 规则。
- `npm publish` 会执行 `package.json` 中的 `prepublish` 脚本。
# mathProblem
