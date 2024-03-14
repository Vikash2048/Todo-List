
import Todolist from './Todolist'
import './App.scss'
import Listype from './components/Listype'
import Userdetail from './components/Userdetail'
import ItemContextProvider from './context/ItemContextProvider'

function App() {

  return (
    <ItemContextProvider>
      <div className='main'>
        <Listype />
        <Userdetail />
        <h3 className='title'>TodoList</h3>
        <Todolist />
      </div>
    </ItemContextProvider>
  )
}

export default App
