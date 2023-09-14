import { Route } from 'react-router-dom'
import './App.css'
import ChatPage from './Chat/ChatPage'
import Form from './Form/Form'

function App() {
  return (
    <>
      <Route path='/' component={Form} exact/>
      <Route path='/chats' component={ChatPage}/>
    </>
  )
}

export default App
