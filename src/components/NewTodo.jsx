
export default function newnote() {
    return (
        <>
            <div className="addTask ">
                <input type="text" placeholder="Write new task..." />
                <button type="submit" value="" name="Add Task" placeholder="save" className="addtask-btn">Add Task</button>
            </div>
        </>
    )
}