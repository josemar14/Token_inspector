import React, { useState } from 'react'
import axios from 'axios'
import TokenInfo from './components/TokenInfo'
import RiskCard from './components/RiskCard'
import TokenChart from './components/TokenChart'

export default function App() {
  const [token, setToken] = useState('')
  const [data, setData] = useState(null)

  const handleAnalyze = async () => {
    if (!token) return
    const res = await axios.get(`/api/analyze?token=${token}`)
    setData(res.data)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🔎 Token Analyzer</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Cole o endereço do token..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border px-4 py-2 w-full rounded"
        />
        <button onClick={handleAnalyze} className="bg-blue-600 text-white px-4 py-2 rounded">
          Analisar
        </button>
      </div>

      {data && (
        <div className="space-y-6">
          <TokenInfo info={data} />
          <RiskCard risk={data.risk_score} />
          <TokenChart history={data.price_history} />
        </div>
      )}
    </div>
  )
}
