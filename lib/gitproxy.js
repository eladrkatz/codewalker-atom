'use babel';

export default {

  exec(cmd, args) {
    var childProcess = require('child_process');
    var projPath = atom.workspace.project.rootDirectories[0].path;

    return new Promise(function(resolve, reject) {
      childProcess.execFile(cmd, args, {cwd:projPath}, function(error, stdout, stderr) {
        if (error)
          reject({error, stderr});
        else
          resolve(stdout);
      });
    });
  },

  runGit(callback) {

    this.exec('git', ['status'])
      .then(result => console.log(result))
      .catch(err => console.log(err));
    //
    // var childProcess = require('child_process'),
    //     ls;
    //
    // var projPath = atom.workspace.project.rootDirectories[0].path;
    //
    // ls = childProcess.execFile('git', ['status'], {
    //   cwd: projPath
    // }, function (error, stdout, stderr) {
    //   if (error) {
    //     console.log(error.stack);
    //     console.log('Error code: '+error.code);
    //     console.log('Signal received: '+error.signal);
    //   }
    //   callback(stdout);
    //   // console.log('Child Process STDOUT: '+stdout);
    //   // console.log('Child Process STDERR: '+stderr);
    // });
    //
    // // ls.on('exit', function (code) {
    // //   // console.log('Child process exited with exit code '+code);
    // // });
    // //

  }
}
