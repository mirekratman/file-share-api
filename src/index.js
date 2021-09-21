"use strict"
import ApiServer from './Modules/ApiServer.js';

let server = ApiServer.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})