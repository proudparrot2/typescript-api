import express from 'express';
import ejs from 'ejs';

const app = express()
app.set('view engine', 'ejs')

import defaultroute from './routes/default'
import fileupload from './routes/fileupload'

app.get('/', defaultroute)

app.listen(3000, () => {
  console.log("lets a go!")
}) 