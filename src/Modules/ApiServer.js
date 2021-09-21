"use strict";
/**
 * Simple Rest API server
 */

import express from 'express';
const ApiServer = express();


ApiServer.get('/getfilelist', function (req, res) {

    res.end( 'aaaa' );

    /*
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
    */
})


export default ApiServer;