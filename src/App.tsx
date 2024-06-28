import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContents"
import { OrderTotal } from "./components/OrderTotal"
import { TipFormat } from "./components/TipFormat"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducers/order-reducer"
function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black"> Calculadora de Propinas y consumos</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className="p-5 border m-2 border-teal-400 border-dashed rounded">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-3">
            {state.menu.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="m-2 border border-dashed border-sky-500 p-5 rounded-lg space-y-10">
            <OrderContent
              order={state.order}
              dispatch={dispatch}
            />
            {state.order.length === 0 ? '' :
              <>
                <TipFormat
                  dispatch={dispatch}
                />
                <OrderTotal
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
              </>
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
