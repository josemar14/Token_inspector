import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function TokenChart({ history }: { history: any[] }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-2">📈 Histórico de Preço</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
        }
