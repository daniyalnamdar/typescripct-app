import btnStyles from './PrimaryBtn.module.css'
import globalBtnStyles from '../../css/global.module.css'

const PrimaryBtn = () => {
   return (
      <>
         <button
            className={[btnStyles.primaryBtn, globalBtnStyles.button].join(' ')}
         >
            React + TypeScript
         </button>
      </>
   )
}

export default PrimaryBtn
