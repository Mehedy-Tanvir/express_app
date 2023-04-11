const express = require('express');
const app = express();
// app.use((req, res) => {
//     console.log('we got a new request');
//     // res.send("Hello we got your request. This is a response.");
//     res.send({ color: 'red', });
// })
app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
app.get('/', (req, res) => {
    res.send('Welcome!!! This is the homepage.');
});
app.get('/r/:subreddit', (req, res) => {

    const { subreddit } = req.params;
    res.send(`Browsing the ${subreddit}`);
});
app.get('/r/:subreddit/:postId', (req, res) => {

    const { subreddit, postId } = req.params;
    res.send(`Browsing the ${postId}, ${subreddit}`);
});
app.get('/cats', (req, res) => {
    res.send('Meow');
});
app.get('/search', (req, res) => {

    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched');
    }
    res.send(`<h1>Search results for: ${q}<h1>`);
});
app.post('/cats', (req, res) => {
    res.send('This is post request');
});


app.get('*', (req, res) => {
    res.send(`I dont know that path`);
});