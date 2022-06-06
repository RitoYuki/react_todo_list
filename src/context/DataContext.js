import {useState, createContext} from 'react';


const DataContext = createContext({});
export const DataProvider = ({children}) => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')
    
    const filtered = items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))
    const length = items.length
    //end of added stuff 

    const setAndSaveItems = (newItems) => {
      setItems(newItems);
      localStorage.setItem('shoppinglist', JSON.stringify(newItems));
    }
  
    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = { id, checked: false, item };
      const listItems = [...items, myNewItem];
      setAndSaveItems(listItems);
    }
  
    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setAndSaveItems(listItems);
    }
  
    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setAndSaveItems(listItems);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!newItem) return;
      addItem(newItem);
      setNewItem('');
    }



    return (
        <DataContext.Provider value={{
            newItem, 
            setNewItem,
            handleSubmit,
            search, 
            setSearch,
            items, 
            handleCheck,
            handleDelete,
            filtered,
            length
        }}>{children}
        </DataContext.Provider>
    )
}
export default DataContext
