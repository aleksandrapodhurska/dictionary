import React, {useState, useEffect} from 'react';
import DictionaryService from '../../services/dictionary-service';

const ResultBox = () => {
    const dictionary = new DictionaryService();

    const [item, updateItem] = useState([]);

    useEffect(() => {
        onUpdateItem();
    }, []);

    const onUpdateItem = () => {
        dictionary.getWord('good', 'rhymes')
        .then((data) => {
            updateItem(data.rhymes.all);
        });
        
    }
    // console.log(item[0]);

    return(
        <>
            <h3>Result Box</h3>
            <ul className="list-group list-group-flush">
                <ComponentItem item={item}/>
            </ul>
        </>
    )
}

const ComponentItem = ({item}) => {
    const firstFive = item.slice(0, 5);
    const secondFive = item.slice(6, 10);
    return(
        <>
        {secondFive.map((elem, i) => (
            <li className="list-group-item" key={i}>{elem}</li>
        ))}
        </>
    )
}

// const Item = () => {
    
// }

export default ResultBox;
