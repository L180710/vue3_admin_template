const getTime = () => {
  let message = ''
  // 通过内置构造函数 Date
  let hours = new Date().getHours()
  console.log('时间啊', hours)
  if (hours <= 9) {
    message = '早上'
  } else if (hours <= 12) {
    message = '上午'
  } else if (hours <= 18) {
    message = '下午'
  } else {
    message = '晚上'
  }
  console.log('message', message)
}
