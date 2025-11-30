import { useState } from 'react'

function App5() {
   const tasks = ['Wake Up', 'Eat', 'Workout', 'Code', 'Sleep', 'Repeat']
   const [active, setActive] = useState(0)
   return (
      <>
         <h1 className="text-2xl font-bold"> My Daily Tasks</h1>
         <ul className="list-style">
            {tasks.map((task, index) => (
               <li className="list-item-style" key={index}>
                  {task}
               </li>
            ))}
         </ul>

         <ul className="list-style">
            {tasks.map((task, index) => (
               <li className="list-item-style" key={index}>
                  {task}
               </li>
            ))}
         </ul>
      </>
   )
}

export default App5
