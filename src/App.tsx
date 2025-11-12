import Message from './components/Message'

function App() {
   // How to show map and list in react
   const dudes = ['Dani', 'Shano', 'Can']
   // Conditional rendering
   const languages = ['PHP', 'JavaScript', 'Python', 'Swift']

   // Hnadle DOM Events
   const handleClick = (language: string) => {
      alert(language)
   }
   return (
      <>
         <div className="flex flex-col justify-center items-center">
            {/* <h1>Hello React!</h1>
            <p>HEllo</p>
            <Message />
            <h2>Handsome Niggas</h2>
            <ul>
               {dudes.map((dude, index) => (
                  <li key={index}>{dude}</li>
               ))}
            </ul> */}
            <h1 className="text-2xl font-bold">Languages</h1>
            <ul>
               {languages.map((language, index) => (
                  <li
                     className="py-2"
                     onClick={() => handleClick(language)}
                     key={index}
                  >
                     {language}
                  </li>
               ))}
            </ul>
            <hr />
            {languages.length === 0 && <p> There are no items in the list.</p>}
            {languages.length > 0 ? (
               <p>Total: {languages.length}</p>
            ) : (
               <p>Total: 0</p>
            )}
         </div>
      </>
   )
}

export default App
