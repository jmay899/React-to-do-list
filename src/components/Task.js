import { FaTimes } from "react-icons/fa"

const Task = ({ task,onDelete,onToggle }) => {
    return (
        <div 
        className={`task ${task.reminder ? 'reminder':''}`} 
        onDoubleClick={(id) => onToggle(task.id)}>
            <h3>
                { task.text } 
                <FaTimes style={{color:"red", cursor: "pointer"}}
                onClick={() => onDelete(task.id) }/> 
             </h3>
            <p>
                { 
                    (new Date(task.day)).toString().slice(4,16) +
                    " at " + 
                    (new Date(task.day)).toString().slice(16,21)
                }
            </p>
            
        </div>
    )
}
export default Task
