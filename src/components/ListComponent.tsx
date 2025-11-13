import { useState, type ReactNode } from 'react'

interface Props {
   children: ReactNode
   items: string[]
   onSelectItem: (item: string) => void
}

const ListComponent = ({ children, items, onSelectItem }: Props) => {
   const [selectedItem, setSelectedItem] = useState(0)
   return (
      <>
         <div className="flex flex-col justify-center items-center">
            {children}
            <ul className="w-1/2 border border-grau-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
               {items.map((item, index) => (
                  <li
                     className={
                        selectedItem === index
                           ? 'py-2 px-3 bg-gray-800 text-white'
                           : 'py-2 px-3'
                     }
                     key={index}
                     onClick={() => {
                        setSelectedItem(index), onSelectItem(item)
                     }}
                  >
                     {item}
                  </li>
               ))}
            </ul>
         </div>
      </>
   )
}

export default ListComponent
