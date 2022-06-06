import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import {DataProvider} from './context/DataContext'
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('')

  return (
    <div className={`App ${mode}`}>
      <DataProvider>
        <Header title="Grocery List" mode={mode} setMode={setMode}/>
        <AddItem/>
        <SearchItem />
        <Content />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;