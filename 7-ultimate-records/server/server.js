const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

let records = [
  {
    recordName: 'React Rave',
    artistName: 'The Developers',
    description: 'A rocking good rave bopping to the tune of Javascript',
  },
  {
    recordName: 'Building an App',
    artistName: 'The Components',
    description: 'Sounds of the future',
  }
];

app.get('/api/records', (req,res) => {
  console.log("GET: /api/records called!");
  res.send(records);
});
app.post('/api/records', (req,res)=>{
  console.log("POST: /api/records called!");
  const newRecord = {
    id: records.reduce((acc, item)=>{
      return item.id > acc ? item.id : acc
    },0) + 1,
    ...req.body};
  records.push(newRecord);
  res.send(newRecord);
});

app.listen(port,()=> console.log(`server listening on port ${port}`));
