const express = require('express');
const { v4: uuid } = require('uuid');
const Sonic = require('sonic-channel');

const app = express();

const sonicChannelIngest = Sonic.Ingest({
  
})

app.post('/pages', (req, res) => {
  const { title, content } = req.body
  const id = uuid;

  return res.status(201).send();
});

app.get('/search', (req, res) => {

  return res.json([]);
});

app.get('/suggest', (req, res) => {

  return res.json([]);
});

app.listen(3333)