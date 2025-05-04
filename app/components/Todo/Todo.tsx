/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";

export default () => {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(['ლექციაა გადასაღები', 'ალგორითმია დასამატებელი']);

    const onChange = (e) => {
        setTask(e.target.value);
    }

    const onAdd = (e) => {
        setTasks([...tasks, task]);
        setTask('');
    }

    return (
        <div>
            <input 
                type="text" 
                value={task}
                onChange={onChange}
            />
            <button onClick={onAdd}>დამატება</button>
            <ul>
                {
                    tasks.map((task, id) => <li key={id}>{task}</li>)
                }
            </ul>
        </div>
    )
}