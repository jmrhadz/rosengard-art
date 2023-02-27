const ENDPOINT = 'https://63f90a6fc98167fcb469c371.mockapi.io/contacts'

class ContactApi {
    get = async () => {
        try { const resp = await fetch(ENDPOINT)
            const data = await resp.json()
            console.log("getting data", data)
            return data;
        } catch(e) {
            console.log('fetch messages had an issue', e)
        }
    }


    put = async (message) => {
        console.log("api: updating", message.name)
        try {const resp = await fetch(`${ENDPOINT}/${message.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        return await resp.json()
        } catch(e){
            console.log('update contact had an issue', e)
        }
    }

    post = async (message) => {
        console.log("api: creating", message)
        try{const resp = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        return await resp.json()
        } catch (e) {
            console.log('sending message had an issue', e)
        }
    }

    delete = async (id) => {
        console.log("api: deleting", id)
        try{const resp = await fetch(`${ENDPOINT}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'

            }
        })
        return await resp.json()
        } catch(e) {
            console.log('Deleting message had an issue', e)
        }
    }
}

export const contactAPI = new ContactApi();