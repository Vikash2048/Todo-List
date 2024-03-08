
import Todolist from './Todolist'
import './App.scss'
import Listype from './components/Listype'
import Userdetail from './components/Userdetail'

function App() {

  return (
    <div className='main'> 
      <Listype/>
      <Userdetail/>
      <h3 className='title'>TodoList</h3>
      <Todolist/>
    </div>
  )
}

export default App
