require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { customAlphabet } = require('nanoid');
const Url = require('./models/Url');

const app = express();
app.use(cors());
app.use(express.json());

const nano = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/urlshortener';
mongoose.connect(MONGODB_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.error('Mongo error', e));

app.get('/api/health', (req,res)=>res.json({ok:true}));

app.get('/api/urls', async (req,res)=>{
  try{
    const urls = await Url.find().sort({createdAt:-1});
    res.json(urls);
  }catch(e){ res.status(500).json({error:'Failed to fetch'}); }
});

app.post('/api/shorten', async (req,res)=>{
  try{
    const { longUrl } = req.body;
    if(!longUrl) return res.status(400).json({error:'longUrl is required'});
    const shortCode = nano();
    const doc = await Url.create({ shortCode, longUrl });
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    res.json({ shortUrl: `${baseUrl}/${shortCode}`, shortCode, longUrl, clicks: doc.clicks });
  }catch(e){ res.status(500).json({error:'Failed to shorten'}); }
});

app.get('/:code', async (req,res)=>{
  try{
    const doc = await Url.findOne({ shortCode: req.params.code });
    if(!doc) return res.status(404).send('Not found');
    doc.clicks += 1; await doc.save();
    res.redirect(doc.longUrl);
  }catch(e){ res.status(500).send('Server error'); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('Server on', PORT));