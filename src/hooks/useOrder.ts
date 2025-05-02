import { useState } from 'react'
import { MenuItem, OrderItem } from '../types/index.tsx'

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        const itemExists = order.some((orderItem) => orderItem.id === item.id)
        if (itemExists) {
            const updatedOrder = order.map((orderItem) => orderItem.id === item.id ? {
                ...orderItem,
                quantity: orderItem.quantity + 1
            } : orderItem)
            setOrder(updatedOrder)
        }
        else {
            const newItem = {...item, quantity: 1 }
        setOrder([...order, newItem])
        }
    }

    return {
        order,
        addItem,
    }
}
