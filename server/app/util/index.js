const { v4: uuidv4 } = require('uuid');

//StructsToMaps 将结构体转换成Map列表
function structsToMaps(objs) {
    let objList = [];
    try {
        for (const obj of objs) {
            objList.push(JSON.parse(JSON.stringify(obj)));
        }
        const data = objList.map((obj) => {
            return obj;
        });
        return data;
    } catch (err) {
        this.ctx.logger.error(`convertUtil.structsToMaps err: err=[${err}]`);
        return null;
    }
}

//ListToTree 字典列表转树形结构
function listToTree(arr, id, pid, child) {
    const mapList = [];
    const idValMap = new Map();

    for (const m of arr) {
        if (m[id]) {
            idValMap.set(m[id], m);
        }
    }

    for (const m of arr) {
        if (m[pid]) {
            const pNode = idValMap.get(m[pid]);
            if (pNode) {
                let cVal = pNode[child];
                if (cVal === null || cVal === undefined) {
                    cVal = [m];
                } else {
                    cVal.push(m);
                }
                pNode[child] = cVal;
                continue;
            }
        }
        mapList.push(m);
    }

    return mapList;
}

//RandomString 返回随机字符串
function randomString(length) {
    const allRandomStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let byteList = '';

    for (let i = 0; i < length; i++) {
        byteList += allRandomStr.charAt(Math.floor(Math.random() * allRandomStr.length));
    }

    return byteList;
}

function makeUuid() {
    return uuidv4().replace(/-/g, '');
}

//GetFmtSize 按照正确的格式缩放字节
function getFmtSize(data) {
    const factor = 1024;
    let res = data;

    const units = ['', 'K', 'M', 'G', 'T', 'P'];

    for (let i = 0; i < units.length; i++) {
      if (res < factor) {
        return `${res.toFixed(2)}${units[i]}B`;
      }
      res /= factor;
    }

    return `${res.toFixed(2)}P`;
  }

// 导出公共方法
module.exports = {
    structsToMaps,
    listToTree,
    randomString,
    makeUuid,
    getFmtSize
};