"use strict";

/**
 * Simple Rest API server
 */

import express from 'express';
import path from 'path';
import {FileManager} from 'simple-api-modules';

const tmpStorage = path.join("../../_tmpStorage");

const Api = express();
const fm = new FileManager()


console.log(tmpStorage);

Api.get('/readFile', function (req, res) {

    FileManager

    res.end('aaaa');

    /*
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
    */
})


export default Api;