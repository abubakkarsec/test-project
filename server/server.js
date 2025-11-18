const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '..', 'web')));

app.post('/collect', (req, res) => {
  const entry = req.body;
  const filePath = path.join(__dirname, 'submissions.json');

  let db = [];
  if (fs.existsSync(filePath)) {
    db = JSON.parse(fs.readFileSync(filePath));
  }

  db.push(entry);
  fs.writeFileSync(filePath, JSON.stringify(db, null, 2));

  console.log("Saved entry:", entry);
  res.json({status:'saved'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));
