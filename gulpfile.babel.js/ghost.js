import ghost from 'ghost';
import path from 'path';

function dirPath() {
  let params = ['./'];
  params.push.apply(params, arguments);
  return path.join.apply(path, params);
}

function ghost() {
  function startServer(ghostServer) {
    ghostServer.start();
  }

  ghost({
    config: dirPath('../config.js')
  }).then(startServer);
}

export default ghost;
