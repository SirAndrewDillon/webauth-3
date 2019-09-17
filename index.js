const server = require('./server.js')

const port = process.env.PORT || 2929
server.listen(port, () => console.log(`Reporting for duty on port ${port}!!!`))
