import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss'
import TodoForm from './TodoForm'
import TaskList from './TaskList'

export default function todolist() {
   
    return (
        <>
            <div className='App'>
                <h2>Todo App</h2>
                <TodoForm />
                <TaskList />
            </div>
        </>
    )
}