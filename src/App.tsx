import ListComponent from './components/ListComponent'

function App() {
   const items = ['PHP', 'JavaScript', 'Python', 'Swift']
   const frameworks = ['Laravel', 'Symfony', 'Django', 'Dart']

   const handleOnSelectItem = (item: string) => {
      alert(item)
   }
   return (
      <>
         <div className="flex flex-col">
            <ListComponent items={items} onSelectItem={handleOnSelectItem}>
               <h1 className="font-bold text-2xl mb-2">
                  Programming Languages
               </h1>
               <p>This is a list of programming languages i know.</p>
               <a href="" className="text-blue-500">
                  This is a Link
               </a>
            </ListComponent>
            {/* <ListComponent
               items={frameworks}
               heading="Frameworks"
               onSelectItem={handleOnSelectItem}
            /> */}
         </div>
      </>
   )
}

export default App
