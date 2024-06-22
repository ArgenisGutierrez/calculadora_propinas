import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id)
    if (!itemExist) {
      const newItem: OrderItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    } else {
      addQuantity(item)
    }
  }

  function addQuantity(item: MenuItem) {
    const index = order.findIndex((orderItem) => orderItem.id === item.id)
    const newOrder = [...order]
    newOrder[index].quantity++
    setOrder(newOrder)
  }

  function removeItem(id: OrderItem['id']) {
    const newOrder = [...order].filter(item => item.id !== id)
    setOrder(newOrder)
  }

  function cleanOrder() {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    cleanOrder,
    tip,
    setTip,
    addItem,
    removeItem,
  }
}
