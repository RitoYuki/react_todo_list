import { FaMoon, FaSun } from 'react-icons/fa';
import { useRef } from 'react';
const Header = ({ title ,mode,setMode}) => {
  const inputRef = useRef();
  const toggle = ()=> {
    inputRef.current.blur()
    if(mode !==  'Dark'){setMode('Dark')}
    else{setMode('')}
 }
  
  return (
      <header>
          <h1>{title}</h1>
          <button
                ref={inputRef}
                type='submit'
                aria-label='Add Item'
                onClick={() => toggle()}
            >
              {(mode !=='Dark')? <FaMoon />: <FaSun />}
            </button>
      </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header;