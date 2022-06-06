import { useContext } from 'react';
import DataContext from './context/DataContext';
import LineItem from './LineItem';

const ItemList = () => {
    const { filtered } = useContext(DataContext)
    return (
        <ul>
            {filtered.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}                    
                />
            ))}
        </ul>
    )
}

export default ItemList