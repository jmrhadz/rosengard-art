import { Table } from "react-bootstrap"
import { useState, useEffect } from "react"
import { orderAPI } from "../REST/ordersApi"

export default function Orders(){
    const [ orders, setOrders ] = useState([])
    const [ cancelled, setCancelled ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        (async () => {
            const fetched = await orderAPI.get()
            const cx = await orderAPI.getCancelled()
            setLoading(false)
            setOrders(fetched)
            setCancelled(cx)
        })()
    }, [])



    // function distributeOrders(orders){
    //     const orderMap = {
    //         new: [],
    //         progress: [],
    //         shipped: [],
    //         cancelled: []
    //     }
    // }


    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Order #</th>
                        <th>Name</th>
                        <th>Purchase Total</th>
                        <th>Progress</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.total}</td>
                            <td>{order.quantity}</td>
                            <td>{order.paidBool}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
            
        </>
    )
}