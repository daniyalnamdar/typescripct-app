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
            <ListComponent
               items={items}
               heading="Programming Languages"
               onSelectItem={handleOnSelectItem}
            />
            <ListComponent
               items={frameworks}
               heading="Frameworks"
               onSelectItem={handleOnSelectItem}
            />
         </div>
      </>
   )
}

export default App
