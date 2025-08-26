import React,{useState} from 'react'
import axios from 'axios'
export default function UrlForm(){
  const [longUrl,setLongUrl]=useState('')
  const [result,setResult]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const go=async()=>{
    setLoading(true);setError(null);setResult(null)
    try{ const res=await axios.post('/api/shorten',{ longUrl }); setResult(res.data) }
    catch(e){ setError('Failed to shorten URL') }
    finally{ setLoading(false) }
  }
  return (<div>
    <label>Enter a long URL</label>
    <div style={{display:'flex',gap:8,marginTop:8}}>
      <input value={longUrl} onChange={e=>setLongUrl(e.target.value)} placeholder="https://example.com/very/long/path..." style={{flex:1,padding:10,border:'1px solid #ccc',borderRadius:8}}/>
      <button onClick={go} disabled={!longUrl||loading}>{loading?'Working...':'Shorten'}</button>
    </div>
    {error && <p style={{color:'red',marginTop:12}}>{error}</p>}
    {result && <div style={{marginTop:16,padding:12,border:'1px solid #eee',borderRadius:8}}>
      <div><b>Short URL:</b> <a href={result.shortUrl} target="_blank">{result.shortUrl}</a></div>
      <div><b>Clicks:</b> {result.clicks}</div>
    </div>}
  </div>)
}