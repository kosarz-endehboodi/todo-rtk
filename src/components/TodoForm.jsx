import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAsyncTodods } from "../feature/todo/todoSlice"

export default function newnote() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const{isloading}=useSelector((state)=>state.todos)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        dispatch(addAsyncTodods({ title: value })); 
        setValue("");
    } 
    return (
        <>
            <form className={`addTask`} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder=" new task..."
                    autoComplete="off"
                    id="name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button  type="submit" value="" name="Add Task" placeholder="save" className="addtask-btn">{isloading?"submiting...": "Add Task"}</button>
            </form>
        </>
    )
}