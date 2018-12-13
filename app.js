const fs = require("fs")
const path = require("path")
const node_ssh = require("node-ssh")
const config = require("./config")
const utils = require("./utils")

const ssh = new node_ssh()
const conn = ssh.connect(config.configData)
// const commandName = process.argv[2]

//获取命令行的文件夹list
let i = 2
const commandList = []
while (process.argv[i]) {
  commandList.push(process.argv[i])
  i++
}

conn.then(_ => {
  const { dirs, files } = config.upLoads
  //上传的是文件夹
  commandList.map(commandName => {
    if (dirs[commandName]) {
      const dir = dirs[commandName]
      utils.upLoadDir(dir["localDir"], dir["targetDir"])(ssh)
        .then(dir["upLoadSuccessCallback"], dir["upLoadErrorCallback"])
        .then(_ => {

        })
      //上传的是文件
    } else if (files[commandName]) {
      let file = files[commandName]
      utils.upLoadFile(file["localFile"], file["targetFile"])(ssh)
        .then(file["upLoadSuccessCallback"], file["upLoadErrorCallback"])
        .then(_ => {

        })
    }
  })
})