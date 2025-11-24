interface Props {
   textColor?: 'text-blue-500' | 'text-red-500' | 'text-gray-500'
}

const TitleComponent = ({ textColor = 'text-blue-500' }: Props) => {
   return (
      <h1 className={`font-bold text-4xl ${textColor}`}> React + TypeScript</h1>
   )
}

export default TitleComponent
