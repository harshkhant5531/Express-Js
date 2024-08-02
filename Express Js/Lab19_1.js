const express = require('express')
const app = express();
const port = 5531;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log('server started at:','',+port);
})