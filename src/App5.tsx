import { IoIosSave } from 'react-icons/io'
import stitch from './assets/1394966.jpg'

function App5() {
   const tasks = ['Wake Up', 'Eat', 'Workout', 'Code', 'Sleep', 'Repeat']
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

         <div className="flex flex-col h-screen justify-center items-center">
            <img src={stitch} alt="Sticth" className="w-1/3 mb-2" />
            <button className="bg-gray-900 text-gray-300 px-8 py-9 rounded-xl text-xl">
               <span className="flex gap-3 items-center">
                  <IoIosSave className="text-3xl text-yellow-400" />
                  Save
               </span>
            </button>
         </div>
      </>
   )
}

export default App5
