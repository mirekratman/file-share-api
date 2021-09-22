"use strict"
import Api from './Api/Api.mjs';

let server = Api.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Simple Rest API listening at http://%s:%s", host, port)
})