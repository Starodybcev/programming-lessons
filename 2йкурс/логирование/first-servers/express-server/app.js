alert('it works');
app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});
