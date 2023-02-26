
export default function Message({message}){
    return (
        
            <tr>
                <td>{message.id}</td>
                <td>{message.date}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                <td>{message.completedl}</td>
            </tr>
        
    )
}