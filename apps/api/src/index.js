const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Sama Salalah API running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(4000, () => {
  console.log('API running on port 4000');
});
