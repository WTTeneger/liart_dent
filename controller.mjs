
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";
// class UserController {
import fs from "fs";
import { v4 as uuidv4 } from 'uuid';
import bids from './models/Bids.js'
import * as tg from './telegram.js'

// import mongoose from 'mongoose'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function get_data_url(req) {
    // получить название поддомена
    // если есть . в req.headers.host
    let subdomain = req.headers.host.split('.')[0];
    console.log(subdomain)
}

export async function index(req, res) {
    res.render('index', { 'credit_b': true })
}

export async function services_type(req, res) {
    get_data_url(req)
    let err = true
    console.log('service/' + req.params.type);
    res.render('service/' + req.params.type, {}, function (err, html) {
        if (err) {
            res.redirect('/404'); // File doesn't exist
            // res.send(html);
        } else {
            res.send(html);
        }
    });
}


export async function services__404(req, res) {
    res.render('_404')
}

export async function services_api_add_bids(req, res) {
    console.log(req.body)
    let data = req.body;
    const silence = new bids({ phone: data['phone'], page: data['page'] });
    console.log(silence);
    silence.save();
    let txt = tg.formater(data['phone'], data['page']);
    tg.senders_(txt);
    
    res.send({
        id: silence._id,
        data: data
    });
}