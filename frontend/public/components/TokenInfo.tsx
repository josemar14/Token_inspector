export default function TokenInfo({ info }: { info: any }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold">📊 Informações do Token</h2>
      <ul className="mt-2 space-y-1">
        <li><strong>Nome:</strong> {info.name}</li>
        <li><strong>Simbolo:</strong> {info.symbol}</li>
        <li><strong>Detentor(s):</strong> {info.holders}</li>
        <li><strong>Market Cap:</strong> ${info.market_cap}</li>
        <li><strong>Liquidez:</strong> ${info.liquidity}</li>
        <li><strong>Contrato Verificado:</strong> {info.contract_verified ? '✅ Sim' : '❌ Não'}</li>
        <li><strong>Liquidez Travada:</strong> {info.locked_liquidity ? '✅ Sim' : '❌ Não'}</li>
      </ul>
    </div>
  )
}
