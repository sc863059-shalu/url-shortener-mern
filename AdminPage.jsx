import React from 'react'
import axios from 'axios'
export default function AdminPage(){
  const [rows,setRows]=React.useState([])
  const [loading,setLoading]=React.useState(true)
  const load=async()=>{ try{ const r=await axios.get('/api/urls'); setRows(r.data) } finally{ setLoading(false) } }
  React.useEffect(()=>{ load() },[])
  if(loading) return <p>Loading...</p>
  return (<div>
    <h2>All Shortened URLs</h2>
    <table style={{borderCollapse:'collapse',width:'100%'}}>
      <thead><tr>
        <th style={{textAlign:'left',borderBottom:'1px solid #ddd',padding:8}}>Short Code</th>
        <th style={{textAlign:'left',borderBottom:'1px solid #ddd',padding:8}}>Original URL</th>
        <th style={{textAlign:'left',borderBottom:'1px solid #ddd',padding:8}}>Clicks</th>
        <th style={{textAlign:'left',borderBottom:'1px solid #ddd',padding:8}}>Created</th>
      </tr></thead>
      <tbody>
        {rows.map(r=>(<tr key={r._id}>
          <td style={{padding:8}}><code>{r.shortCode}</code></td>
          <td style={{padding:8,wordBreak:'break-all'}}>{r.longUrl}</td>
          <td style={{padding:8}}>{r.clicks}</td>
          <td style={{padding:8}}>{new Date(r.createdAt).toLocaleString()}</td>
        </tr>))}
      </tbody>
    </table>
  </div>)
}