import { FaUserAlt } from 'react-icons/fa'
import { FaBriefcase } from 'react-icons/fa'

import stitch from './assets/1394966.jpg'

function App6() {
   const profile = {
      name: 'Daniyal Namdar',
      role: 'Frontend Developer',
      image: stitch
   }

   return (
      <div className="flex flex-col justify-center h-screen items-center">
         <div className="flex flex-col w-[300px] rounded-2xl overflow-hidden border border-gray-300 shadow-2xl">
            <img src={profile.image} alt="stitch" className="mb-3" />
            <div className="flex flex-col px-3 pb-3">
               <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                     <FaUserAlt className="text-gray-400" />
                     {profile.name}
                  </li>
                  <li className="flex items-center gap-2">
                     <FaBriefcase className="text-gray-400" />
                     {profile.role}
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default App6
