const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use('/upload', require('./routes/upload'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});