import { useState } from 'react'

const ListComponent = () => {
   const languages = ['PHP', 'JavaScript', 'Python', 'Swift']
   const [selectedItem, setSelectedItem] = useState(0)
   return (
      <>
         <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-2">Programming Languages</h1>
            <ul className="w-1/2 border border-grau-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
               {languages.map((language, index) => (
                  <li
                     className={
                        selectedItem === index
                           ? 'py-2 px-3 bg-gray-800 text-white'
                           : 'py-2 px-3'
                     }
                     key={index}
                     onClick={() => setSelectedItem(index)}
                  >
                     {language}
                  </li>
               ))}
            </ul>
         </div>
      </>
   )
}

export default ListComponent
