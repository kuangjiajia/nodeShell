const path = require("path")
const upLoadDir = (localDir, targetDir) => {
  const failed = []
  const successful = []
  return ssh => {
    console.log(localDir)
    console.log(targetDir)
    return ssh.putDirectory(localDir, targetDir, {
      recursive: true,
      concurrency: 10,
      validate: function (itemPath) {
        const baseName = path.basename(itemPath)
        return baseName.substr(0, 1) !== '.' && // do not allow dot files
          baseName !== 'node_modules' // do not allow node_modules
      },
      tick: function (localPath, remotePath, error) {
        if (error) {
          failed.push(localPath)
        } else {
          successful.push(localPath)
        }
      }
    })
  }
}

const upLoadFile = (localFile, targetFile) => {
  return ssh => {
    return ssh.putFile(localFile, targetFile)
  }
}

const execBefore =


  module.exports = {
    upLoadDir,
    upLoadFile
  }