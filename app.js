const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'spa')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'spa', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const url = 'https://script.google.com/macros/s/AKfycbyejLMtAafFV7nn0goTQYZUiHkfBE45k5MY0mCrN2NlhiAeHvHiJ71X2KlRPaDe44eB/exec'
app.post('/submit-form', async (req, res) => {
  try {
    const ctime = new Date()
    req.body.ctime=ctime.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(response => response.text())
    .then(result => {
        res.send({ok:true});
    })
    .catch(error => {
        console.error('Error:', error);
    });
  
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Internal Server Error');
  }
});
