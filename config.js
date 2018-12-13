const fs = require("fs")

const configData = {
  host: "39.106.50.136",
  port: 22,
  username: "root",
  password: "Kuangjunjia123",
  // 你的私钥地址
  // privateKey: fs.readFileSync("") 
}

const upLoads = {
  dirs: {
    //npm run commandName
    testDir: {
      localDir: "/Users/paddy/Documents/gihub/nodeShell/pubic",
      targetDir: "/usr/node_ssh_test/public",
      upLoadSuccessCallback: function (status) {
        console.log(status)
      },
      upLoadErrorCallback: function (err) {
        console.log(err)
      },
      beforeExecList: [],
      breforeExecCallback: function (res) {
        console.log(res)
      },
      afterExecList: [],
      afterExecCallback: function (res) {
        console.log(res)
      },
    },
    testUtil: {
      localDir: "/Users/paddy/Documents/gihub/nodeShell/utils",
      targetDir: "/usr/node_ssh_test/utils",
      success: function (status) {
        console.log("kuangjiajia")
      },
    }
  },
  files: {
    testFile: {
      localFile: "/Users/paddy/Documents/gihub/nodeShell/config.js",
      targetFile: "/usr/node_ssh_test/public/config.js",
      upLoadSuccessCallback: () => {
        console.log("upload file success")
      },
      upLoadErrorCallback: err => {
        console.log("upload file error:", err)
      },
      beforeExecList: [],
      breforeExecCallback: res => {
        console.log(res)
      },
      afterExecList: [],
      afterExecCallback: res => {
        console.log(res)
      },
    }
  }
}


module.exports = {
  configData,
  upLoads
}