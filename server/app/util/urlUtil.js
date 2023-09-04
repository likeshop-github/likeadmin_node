// app/util/urlUtil.js

const path = require('path');
const { publicPrefix, publicUrl } = require('../extend/config');

// 定义转换绝对路径的方法
function toAbsoluteUrl(u) {
  // TODO: engine默认local
  if (!u) {
    return '';
  }
  const parsedUrl = new URL(publicUrl);
  
  if (u.indexOf('/public/static/') === 0) {
    parsedUrl.pathname = path.join(parsedUrl.pathname, u);
    return parsedUrl.toString();
  }
  
  const engine = 'local';
  if (engine === 'local') {
    parsedUrl.pathname = path.join(parsedUrl.pathname, publicPrefix, u);
    return parsedUrl.toString();
  }
  
  // TODO: 其他engine
  return u;
}

module.exports = {
  toAbsoluteUrl,
};