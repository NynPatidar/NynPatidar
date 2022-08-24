const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.send('Hello all...!');
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(_dirname,'index,html'));
  })

const port = process.env.PORT || '5000';
app.listen(port, () => console.log('Server Started on port ${port}'));