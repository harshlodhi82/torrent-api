const loadingAnimation = {}
loadingAnimation.start = () => {
  const P = ['\\', '|', '/', '-']
  let x = 0
  if (loadingAnimation.interval) {
    return
  }
  loadingAnimation.interval = setInterval(() => {
    process.stdout.write('\r' + P[x++])
    x &= 3
  }, 250).unref()
}
loadingAnimation.stop = () => {
  if (!loadingAnimation.interval) {
    return
  }
  clearInterval(loadingAnimation.interval)
  delete loadingAnimation.interval
  process.stdout.write('\r \r')
}

export {loadingAnimation}
