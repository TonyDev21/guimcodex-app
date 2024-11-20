import imgPagoEfectivo from "../../../assets/pago-efectivo.svg"
import imgEntidadesBancarias from "../../../assets/pago-efectivo-entidades.svg"

const Efectivo = () => {
  return (
    <div className="mb-8 lg:mb-0">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center">Método de Pago</h2>
      
      {/* Logo Pago Efectivo */}
      <div className="flex justify-center">
        <img src={imgPagoEfectivo} width="150" alt="Logo Pago Efectivo" className="mx-auto" />
      </div>
      
      <form>
        {/* Codigo CIP */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Código de Pago (CIP)</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="number" name="codcip" id="codcip" placeholder="4578124576" disabled />
        </div>

        {/* Monto */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Total a Pagar</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="s/9.98" disabled />
        </div>

        {/* Puedes pagar */}
        <div className="mb-4">
          <img src={imgEntidadesBancarias} alt="Pago Efectivo Entidades" />
        </div>
      </form>
    </div>
  </div>
  )
}

export default Efectivo
