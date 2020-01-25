const send404 = (req, res) => {
  res.status(404)
  res.end()
}

export {
  send404
}
