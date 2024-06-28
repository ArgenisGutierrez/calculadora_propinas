import { MenuItem, OrderItem } from "../types";
import { menuItems } from "../data/db"

//Definir actions
export type OrderActions =
  { type: 'add-item', payload: { item: MenuItem } } |
  { type: 'remove-item', payload: { id: OrderItem['id'] } } |
  { type: 'set-tip', payload: { tip: number } } |
  { type: 'clear-order' }

//Definir type del state
export type OrderState = {
  menu: MenuItem[]
  order: OrderItem[]
  tip: number
}

//Definir el state inicial
export const initialState: OrderState = {
  menu: menuItems,
  order: [],
  tip: 0
}

//Definir el reducer
export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {

  if (action.type === 'add-item') {
    const itemExist = state.order.find((orderItem) => orderItem.id === action.payload.item.id)
    let updatedOrder: OrderItem[] = []
    if (!itemExist) {
      const newItem = { ...action.payload.item, quantity: 1 }
      updatedOrder = [...state.order, newItem]
    } else {
      updatedOrder = state.order.map(order => {
        if (order.id === action.payload.item.id) {
          return {
            ...order,
            quantity: order.quantity + 1
          }
        } else {
          return order
        }
      })
    }
    return {
      ...state,
      order: updatedOrder
    }
  }

  if (action.type === 'remove-item') {
    let updatedOrder: OrderItem[] = []
    updatedOrder = state.order.filter(order => order.id !== action.payload.id)
    return {
      ...state,
      order: updatedOrder
    }
  }

  if (action.type === 'set-tip') {
    return {
      ...state,
      tip: action.payload.tip
    }
  }

  if (action.type === 'clear-order') {
    return {
      ...state,
      tip: 0,
      order: []
    }
  }


  return state
}
