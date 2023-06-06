const express = require('express');

const app = express();
const port = 3000;
app.get('/', (request, response) => {
    response.send('Hello world');
})

app.get('/posts', (request, response0 => {
    res.send({
        name: 'Cam',
        surname: 'Kirkpatrick'
    });
}))

app.listen(port, () => {
    console.log("Server is listening on port 3000");
});