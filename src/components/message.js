import { useRef } from "react"
import { Button } from "react-bootstrap"

// displays messages as cells on the admin dashboard
//TODO: Change background of row based on createdAt date: messages over 24hrs are a certain color (unless completed), completed messages are very low contrast
//TODO: add accessiblity to data/inputs for screen readers

export default function Message({message, handleCheck, handleDelete, index}){
    const checkRef = useRef()
    const date = message.createdAt // shorter name for ternary
  

    // handle the check clicked
     const handleChange = (e) => {
        handleCheck(message.id)
    }

    // handle spam messages by deleting them
    const deleteMessage = (e) => {
        handleDelete(message.id)
    }


    return (
        
            <tr className={(message.source==="cancel")?"shadow":"bg-light"}>
                <td>{index+1}</td>
                <td>{ (date instanceof Date) ? date.toLocaleDateString() : new Date(date).toLocaleDateString() }</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                <td>{message.source}</td>
                <td><input ref={checkRef} onChange={handleChange} className="form-check-input bg-secondary" type="checkbox" checked={message.completed}/><Button variant="danger" className="m-1" onClick={deleteMessage}>Spam?</Button></td>
            </tr>
        
    )
}