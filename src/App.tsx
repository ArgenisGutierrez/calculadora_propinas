import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContent from "./components/OrderContents"
import { OrderTotal } from "./components/OrderTotal"
import { TipFormat } from "./components/TipFormat"
function App() {

  const { order, cleanOrder, tip, setTip, addItem, removeItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black"> Calculadora de Propinas y consumos</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className="p-5 border m-2 border-teal-400 border-dashed rounded">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="m-2 border border-dashed border-sky-500 p-5 rounded-lg space-y-10">
            <OrderContent
              order={order}
              removeItem={removeItem}
            />
            {order.length === 0 ? '' :
              <>
                <TipFormat setTip={setTip} />
                <OrderTotal
                  order={order}
                  tip={tip}
                  cleanOrder={cleanOrder}
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
