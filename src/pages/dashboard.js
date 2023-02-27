import Message from "../components/message";
import {useState, useEffect} from 'react';
import { contactAPI } from "../REST/contactApi";
import { Table } from "react-bootstrap";

export default function Dashboard(){
    const [messages, setMessages] = useState([])
    const [loading, setLoading ] = useState(true)
    const [now, setNow] = useState(new Date())

    useEffect(()=>{
        fetchData()
        console.log(messages)
    }, [])

    const fetchData = async () => {
        setMessages(await contactAPI.get()) ;
        if(messages) setLoading(false)
    }
    
    const handleCheck = async (id) => {
        setLoading(true)
       console.log("check change", id)
       const message = messages.find(msg => msg.id===id)
       console.log(message)
       message.completed = !message.completed;
       console.log(message.completed)
       await contactAPI.put(message)
        .then(fetchData())
    }

    const handleDelete = async (id) => {
        setLoading(true)
        await contactAPI.delete(id)
            .then(fetchData())
    }

    return(
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {(loading) 
                    ? <tr><td>Loading...</td></tr> 
                    : messages.map((el, index) => <Message key={el.id} message={el} index={index} handleCheck={handleCheck} handleDelete={handleDelete} now={now}/>)
                    }
                    
                </tbody>
            </Table>
        </>
    )
}