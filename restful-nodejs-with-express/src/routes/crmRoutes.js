const routes = (app) => {
    app.route('/contact')
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();  
    }, (req, res, next) => {
        res.send('GET request successful!')
    })

    .post((req, res) =>
        res.send('POST request successful!')
    )

    app.route('/contact/:contactId')
    .put((req, res) =>
        res.send('PUT request successful!')
    )

    .delete((req, res) =>
        res.send('DELETE request successful!')
    )
}

export default routes;
