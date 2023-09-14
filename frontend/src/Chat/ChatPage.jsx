import axios from 'axios'
import { useEffect, useState } from "react"

export default function ChatPage() {
  const [chats, setChats] = useState([])
    const getChatData = async () => {
        const {data} = await axios.get('http://localhost:5000/api/chats')
        setChats(data)
    }
    useEffect(() => {
      getChatData()
    }, [])
  console.log(chats)
  return (
    <div>
      <h1>Chat page</h1>
      {
        chats.map(chat => <h1 key={chat._id}>{ chat.chatName}</h1>)
      }
    </div>
  )
}
