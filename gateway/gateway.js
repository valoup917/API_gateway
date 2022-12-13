import express from 'express'
import helmet from 'helmet'
import registry from './routes/registry.json' assert {type: "json"}
import routes from './routes/index.js'
import * as dotenv  from 'dotenv'
import cors from 'cors';

const app = express()
app.use(cors());
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(helmet())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

dotenv.config()

app.get('/ui', (req, res) => {
    res.render('index', {services: registry.services })
})

app.use('/', routes)

app.listen(3000, () => {
    console.log("Gateway has started on port " + 3000);
})