import { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector, useDispatch } from "react-redux"
import { getAsyncTodods } from '../feature/todo/todoSlice';
// const todos = [
//     { id: 1, title: "todo 1", completed: false },
//     { id: 2, title: "todo 2", completed: false }
// ]

export default function TaskList() {
    // const todos = useSelector((state) => state.todos)
    const { todos, isloading, error } = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAsyncTodods());
    }, [dispatch])
    return (
        <>
            <h2>todo List </h2>
            <div className="addTask">
                {
                    isloading ? (<p>loading...</p>):error?(<p>{error}</p>)
                    :(
                    <ul className='lists'>
                        {todos.map((todo) => (<TodoItem key={todo.id} {...todo} />
                            ))}
                    </ul>
                    )
                    }
            </div>
        </>
    )
};