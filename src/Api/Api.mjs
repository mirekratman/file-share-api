"use strict";

/**
 * Simple Rest API server
 */

import express from 'express';
import path from 'path';
import {FileManager} from 'simple-api-modules';
import multer from 'multer';

const __dirname = path.resolve();

/* Should be system TEMP location */
const tmpStorage = path.join(__dirname, "_tmpStorage");

const multerUpload = multer({dest: tmpStorage})
const Api = express();
const fm = new FileManager(tmpStorage);

/**
 * Read file
 */
Api
    .get('/api/readFile/:fileName', async (req, res) => {
        try {
            let data = await fm.read(req.params.fileName);

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
        catch (err) {
            console.error(`Error occured while reading file : "${req.params.fileName}" !`, err);
            res.end('No content');
        }
    })

    .get('/api/showList', async (req, res) => {
        try {
            let data = await fm.list();

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(data));
        }
        catch (err) {
            console.error(`Error occured while reading list !`, err);
            res.end('No content');
        }
    })

    .post('/api/saveFile', multerUpload.single('fileName'), async (req, res) => {

        res.end('ToDo');

    })

    .delete('/api/deleteFile', async (req, res) => {

        res.end('ToDo');

    });

export default Api;