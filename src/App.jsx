import {useState} from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s Appointment',
      day: ' Jan 20 at 8:30 AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Shopping',
      day: ' Feb 20 at 11:00 AM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Office Meeting',
      day: ' Mar 3 at 1:00 PM',
      reminder: false,
    }

  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 )+ 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (
      task.id !== id
    )))
  };

  //Toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id? {...task, reminder: !task.reminder} : task
    
    ))
  }
  return (
    <div className="container">
      <Header onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask}/>   
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'Nothing to show' }
    </div>
  );
}

export default App;
