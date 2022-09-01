const express = require('express');
const app = express();
var cors = require('cors');
app.use(express.json());
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: 'GET, POST, DELETE, PUT',
};
app.use(cors(corsOptions));
const port = process.env.PORT || 4000;

app.use(require('./routes/index'));

app.use('/doc', express.static('uploads/doc'));
app.get('/api/system-status', (req, res) => {
  res.send('BTB Card Api is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
