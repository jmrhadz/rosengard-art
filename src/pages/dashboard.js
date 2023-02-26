import Message from "../components/message";
import {useState, useEffect} from 'react';
import { contactAPI } from "../REST/contactApi";
import { Table } from "react-bootstrap";

export default function Dashboard(){
    const [messages, setMessages] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const data = await contactAPI.get();
            setMessages(data)
        }
        fetchData()
        console.log(messages)
    },[])

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
                    {messages ? messages.forEach(message => (
                       <Message key={message.id}/>
                    ))
                    : <td>Loading...</td>}
                    
                </tbody>
            </Table>
        </>
    )
}