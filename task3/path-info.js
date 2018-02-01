const fs = require('fs');

const opts = { encoding: 'utf8'};

// const path = './hello/'

function pathInfo(path, callback) {

  fs.stat(path, (err, info) => {

    if (err) throw err;

    if (info.isFile()) {
      info.path = path;
      info.type = 'file';
      info.content = fs.readFileSync(path, opts);
      info.childs = undefined;
      //console.log('object is file');
    }

    if (info.isDirectory()) {
      info.path = path;
      info.type = 'directory';
      info.content = undefined;
      info.childs = fs.readdirSync(path, opts);
      // console.log('object is directory');
    }

    callback(err, info);

  });

};

module.exports = pathInfo;




