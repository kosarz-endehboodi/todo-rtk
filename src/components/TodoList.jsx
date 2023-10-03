import '../style.scss'
import NewTodo from './NewTodo'
import TaskList from './TaskList'
export default function todolist() {
    return (
        <>
            <div className='App'>
                <h2>Todo App</h2>
                <NewTodo />
                <TaskList />
            </div>
        </>
    )
}