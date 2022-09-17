import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path';
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'
import cors from 'cors'
import router from './routes.js';
import connect from './db.js'
connect()
const app = express()
const port = 3000


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(bodyParser.urlencoded({
    limit: '150mb',
    parameterLimit: 100000,
    extended: true
}));
var env = nunjucks.configure('templates', {
    autoescape: true,
    express: app
})

// шаблонизатор
app.set('view engine', 'html')


app.use(express.static(__dirname + '/static'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(cookieParser())

app.use('/', router)

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

export { app };