exports.success = function (req, res, message, status) {
  let statusCode = status || 200;
  let statusMessage = message || '';

  res.status(status).send({
    error: false,
    status: status,
    body: message,
  });
};

exports.error = (req, res, message = 'Internal Server Error', status = 500) => {
  res.status(status).send({
    error: true,
    status,
    body: message,
  });
};
