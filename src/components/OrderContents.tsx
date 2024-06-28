import { formatCurrency } from "../helpers/currency"
import { OrderActions } from "../reducers/order-reducer"
import { OrderItem } from "../types"

type OrderContentProps = {
  order: OrderItem[]
  dispatch: React.Dispatch<OrderActions>
}

export default function OrderContent({ order, dispatch }: OrderContentProps) {

  return (
    <div>
      <h2 className="font-black text-4xl">Consumos</h2>
      <div className="space-y-3 mt-10">
        {order.length === 0 ? <p className="text-center">La Orden esta vacia</p>
          : (
            order.map(item => (
              <div className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b" key={item.id}>
                <div>
                  <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                  <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                </div>
                <div>
                  <button className="bg-red-600 h-8 w-8 rounded-full text-white"
                    onClick={() => dispatch({ type: 'remove-item', payload: { id: item.id } })}>
                    X</button>
                </div>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}
