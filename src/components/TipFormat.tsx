import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-30',
    value: .30,
    label: '30%'
  },
]

type TipFormatProps = {
  dispatch: React.Dispatch<OrderActions>
}

export function TipFormat({ dispatch }: TipFormatProps) {

  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map(tip => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              type="radio"
              id={tip.id}
              value={tip.value}
              name="tip"
              onChange={(e) => dispatch({ type: 'set-tip', payload: { tip: +e.target.value } })}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
