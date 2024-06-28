import { useMemo } from "react"
import { formatCurrency } from "../helpers/currency"
import type { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalProps = {
  order: OrderItem[]
  tip: number
  dispatch: React.Dispatch<OrderActions>
}
export function OrderTotal({ order, tip, dispatch }: OrderTotalProps) {
  const subTotal = useMemo(() => order.reduce((total, item) => total + item.price * item.quantity, 0), [order])
  const propina = useMemo(() => subTotal * tip, [subTotal, tip])
  const total = useMemo(() => subTotal + propina, [subTotal, propina])

  return (
    <>
      <div className="space-y-2">
        <h2 className="font-black text-2xl">Totales y propinas</h2>
        <p> Subtotal: {''}
          <span className="font-bold">{formatCurrency(subTotal)}</span>
        </p>
        <p> Propia: {''}
          <span className="font-bold">{formatCurrency(propina)}</span>
        </p>
        <p> Total a pagar: {''}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>
      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10"
        onClick={() => dispatch({ type: 'clear-order' })}>Guardar Orden</button>
    </>
  )
}
