const ENDPOINT = 'https://63f90a6fc98167fcb469c371.mockapi.io/orders'
const ENDPOINT_CX = 'https://63f90a6fc98167fcb469c371.mockapi.io/cancelled'

class OrderApi {
    get = async () => {
        try {
            const resp = await fetch(ENDPOINT)
            const data = await resp.json()
            return data;
        } catch(e){
            console.log('fetch orders had an issue', e)
        }
    }

    getCancelled = async () => {
        try {
            const resp = await fetch(ENDPOINT_CX)
            const data = await resp.json()
            return data;
        } catch(e){
            console.log('fetch cancelled orders had an issue', e)
        }
    }

    put = async (order) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${order.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            return await resp.json();
        } catch(e) {
            console.log('update order had an issue', e)
        }
    }

    putCancelled = async (order) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${order.id}`, {
                metod: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            return await resp.json()
        } catch(e) {
            console.log('updating cancelled order had an issue',e)
        }
    }

    post = async (order) => {
        try {
            const resp = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            return await resp.json();
        } catch(e) {
            console.log('Creating order had an issue', e)
        }
    }

    postCancelled = async (order) => {
        try {
            const resp = await fetch(ENDPOINT_CX, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            return await resp.json();
        } catch(e) {
            console.log('Adding odert to cancelled list had an issue', e)
        }
    }

    delete = async (order) => {
        try{
            const resp = await fetch(`${ENDPOINT}/${order.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return await resp.json();
        } catch(e) {
            console.log('Deleting order had an issue', e)
        }
    }

    deleteCancelled = async (order) => {
        try{
            const resp = await fetch(`${ENDPOINT}/${order.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return await resp.json();
        } catch(e) {
            console.log('Deleting cancelled order had an issue', e)
        }
    }
}

export const orderAPI = new OrderApi();