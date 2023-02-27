import { useState, useRef, useEffect } from "react"
import { Button } from "react-bootstrap"

export default function Message({message, handleCheck, handleDelete, now, index}){
    const checkRef = useRef()
    const date = message.createdAt
  
     const handleChange = (e) => {
        handleCheck(message.id)
    }

    const deleteMessage = (e) => {
        handleDelete(message.id)
    }

    return (
        
            <tr>
                <td>{index+1}</td>
                <td>{ (date instanceof Date) ? date.toLocaleDateString() : new Date(date).toLocaleDateString() }</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                <td><input ref={checkRef} onChange={handleChange} className="form-check-input bg-secondary" type="checkbox" checked={message.completed}/><Button className="m-1" onClick={deleteMessage}>Spam?</Button></td>
            </tr>
        
    )
}