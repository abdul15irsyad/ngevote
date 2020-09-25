const response = {
  internalServerError: (err,res) => {
    return res.status(500).json({
      message: 'Internal server error.',
      error: err.message
    })
  }
}

module.exports = response