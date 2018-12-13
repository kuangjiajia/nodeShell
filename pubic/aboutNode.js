const ssh2 = require("ssh2")
// const utils = require("utils")
// const fs = require("fs")
// const path = require("path")


const configData = require("./config.js")
const Client = ssh2.Client
const conn = new Client()

//连接服务器

// conn.on('ready', function () {
//   console.log('Client :: ready');
//   conn.exec('uptime', function (err, stream) {
//     if (err) throw err;
//     stream.on('close', function (code, signal) {
//       console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
//       conn.end();
//     }).on('data', function (data) {
//       console.log('STDOUT: ' + data);
//     }).stderr.on('data', function (data) {
//       console.log('STDERR: ' + data);
//     });
//   });
// }).connect(configData)


// conn.on('ready', function () {
//   console.log('Client :: ready');
//   conn.shell(function (err, stream) {
//     if (err) throw err;
//     stream.on('close', function () {
//       console.log('Stream :: close');
//       conn.end();
//     }).on('data', function (data) {
//       console.log('STDOUT: ' + data);
//     }).stderr.on('data', function (data) {
//       console.log('STDERR: ' + data);
//     });
//     stream.end('ls -l\nexit\n');
//   });
// }).connect(configData)

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var head = new ListNode(1)
var tmp = head


for (var i = 2; i < 5; i++) {

  head.next = new ListNode(i)
  head = head.next
}

// console.log(tmp)

// var swapPairs = function (head) {
//   // console.log(head)
//   if (!head || !head.next) return head
//   let tmp = head.next
//   [head.next, tmp.next] = [swapPairs(tmp.next), head]
//   // head.next = swapPairs(tmp.next)
//   // tmp.next = head
//   return tmp
// }

// console.log(swapPairs(tmp))


// var swapPairs = function (head) {
//   if (!head || !head.next) return head
//   let [prev, cur, next] = [null, head, head.next]
//   let newHead = next
//   while (cur && next) {
//     if (prev) {
//       prev.next = next
//       cur.next = next.next
//       next.next = cur
//       prev = cur
//       if (cur.next && cur.next.next) {
//         cur = cur.next
//         next = cur.next
//       } else {
//         break
//       }
//     } else {
//       cur.next = next.next
//       next.next = cur
//       prev = cur
//       if (cur.next && cur.next.next) {
//         cur = cur.next
//         next = cur.next
//       } else {
//         break
//       }
//     }
//   }
//   return newHead
// }




// console.log(swapPairs(tmp))

// var reverseList = function (head) {
//   if (!head || !head.next) return head
//   let last = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return last
// }

// var swapPairs = function (head) {
//   if (!head || !head.next) return head
//   let cur, next, newHead = head.next
//   let pre = new ListNode(0)
//   pre.next = head
//   while (pre.next && pre.next.next) {
//     cur = pre.next
//     next = cur.next;
//     [cur.next, next.next, pre.next] = [next.next, cur, next]
//     pre = cur
//   }
//   return newHead
// }
// console.log(swapPairs(tmp))
// console.log(reverseList(tmp))


