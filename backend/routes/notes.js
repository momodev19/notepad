module.exports = (app, conn) => {
    app.get('/notes', (req, res) => {
        let query = "select * from users where id = ?";
        conn.query(query, [1], (err, result, fields) => {
            res.send(result)
        });
    });

    app.post('/notes', (req, res) => {
        res.send('Post Worlds!');
    })
}