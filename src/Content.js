import { useContext } from 'react';
import DataContext from './context/DataContext';
import ItemList from './ItemList';

const Content = () => {
    const {items} = useContext(DataContext)

    return (
        <main>
            {items.length ? (
                <ItemList/>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content