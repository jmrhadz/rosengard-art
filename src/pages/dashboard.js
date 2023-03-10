import Message from "../components/message";
import {useState, useEffect} from 'react';
import { contactAPI } from "../REST/contactApi";
import { Table } from "react-bootstrap";

// The dashboard allows the admin to view messages submitted through the contact form

//TODO: get the component to render after messages are updated or deleted
//TODO: after onsite checkout is integrated, add orders tab where admin can CRUD orders as well

export default function Dashboard(){
    // holds the data
    const [messages, setMessages] = useState([])
    const [loading, setLoading ] = useState(true)

    //initial data fetch
    useEffect(()=>{
        fetchData()
        console.log(messages)
    }, [])

    // READ, then set loading state to false
    const fetchData = async () => {
        setMessages(await contactAPI.get()) ;
        if(messages) setLoading(false)
    }
    
    // handles the "Completed?" checkbox in each message
    // UPDATES the message with new status, fetches new data
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

    // handles deleting spam messages
    // DELETES the message then fetches new data
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
                        <th>Source</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {(loading) 
                    ? <tr><td>Loading...</td></tr> 
                    : messages.map((el, index) => <Message key={el.id} message={el} index={index} handleCheck={handleCheck} handleDelete={handleDelete}/>)
                    }
                    
                </tbody>
            </Table>
        </>
    )
}