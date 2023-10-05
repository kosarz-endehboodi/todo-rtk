import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { deleteAsyncTodods, toggleAsyncTodods, toggleTodo } from "../feature/todo/todoSlice"

export default function Item({ completed, title, id }) {
    const dispatch = useDispatch()
    const [completedval, setcompleted] = useState(false)
    console.log(completed)
    return (
        <>
            <div key={id} id={id} className={`list ${completedval ? "completed" : ""}`}>
                <p>{title}</p>
                <span className="span-btns">
                    <span onClick={() => dispatch(deleteAsyncTodods({ id }))}>❌</span>
                    <span onClick={(event) => setcompleted(dispatch(toggleAsyncTodods({ id,completed:!completed ,title})))} className={`delete-btn`}>✔</span>
                    <span>edit</span>
                </span>
            </div>

        </>
    )
}