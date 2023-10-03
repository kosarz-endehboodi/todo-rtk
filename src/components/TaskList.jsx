
export default function TaskList() {
    return (
        <>
            <h2>your Task</h2>
            <div className="addTask">
                <div className="lists">
                    <div className="list">
                        <p>my task</p>
                        <span className="span-btns">
                            <span >❌</span>
                            <span>✔</span>
                            <span>edit</span>
                        </span>
                    </div>
                    <div className="list">
                        <p>my task</p>
                        <div className="span-btns">
                            <span >❌</span>
                            <span>✔</span>
                            <span>edit</span>
                        </div>
                    </div>
                    <div className="list">
                        <p>my task</p>
                        <div className="span-btns">
                            <span >❌</span>
                            <span>✔</span>
                            <span>edit</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}