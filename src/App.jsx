import './App.css'
import { useSelector } from 'react-redux';
import Todo from './components/Todo'

function App() {
  useSelector((state) => state.todos)
// console.log(todos)
  return (
    <Todo />
  )
}

export default App;
