module.exports = (app, conn) => {
    const bcrypt = require('bcrypt')
    const saltRounds = 10

    app.post('/register', (req, res) => {
        let query = "select * from users where email = ?";
        conn.query(query, [req.body.email], (err, result, fields) => {
            if(err) {
               return res.sendStatus(500);
            } else if(result.length > 0) {
                return res.status(400).json({
                    status: false,
                    msg: 'Duplicate email'
                });
            }     
            
            bcrypt.hash(req.body.password, saltRounds, (err, passwordHash) => {
                let query = "insert into users values (?,?,?,?,?,?,?,?,?)";
                conn.query(query, [
                    null, req.body.firstname, req.body.lastname, req.body.email, passwordHash, 'system', new Date(), 'system', new Date()
                ], (err, result, fields) => {
                    if(err) {
                        console.log(err)
                       return res.sendStatus(400);
                    }
    
                    res.sendStatus(200);                
                });
            })
        });
    })
}