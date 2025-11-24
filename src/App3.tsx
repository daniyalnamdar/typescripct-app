import { useState } from 'react'
import AlertComponent from './components/alertComponent'

function App3() {
   const [showAlert, setShowAlert] = useState(false)
   const handleShowAlert = () => {
      setShowAlert(!showAlert)
   }
   return (
      <>
         <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-200">
            {showAlert && (
               <AlertComponent title="Attention Please!!!!">
                  <p>React and TypeScript is cool</p>
               </AlertComponent>
            )}
            <button
               className="bg-gray-700 text-white uppercase text-sm font-medium rounded-xl px-6 py-2 shadow-xl hover:bg-gray-900"
               onClick={handleShowAlert}
            >
               Show Alert
            </button>
         </div>
      </>
   )
}

export default App3
