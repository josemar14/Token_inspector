export default function RiskCard({ risk }: { risk: number }) {
  const level = risk < 3 ? 'Alto Risco 🚨' : risk < 7 ? 'Risco Moderado ⚠️' : 'Baixo Risco ✅'
  const color = risk < 3 ? 'bg-red-500' : risk < 7 ? 'bg-yellow-400' : 'bg-green-500'

  return (
    <div className={`p-4 text-white rounded shadow ${color}`}>
      <h3 className="text-xl font-bold">🛡️ Status de Risco: {level}</h3>
      <p>Score: {risk}/10</p>
    </div>
  )
}
