import React, {Component} from 'react';
import DictionaryService from '../../services/dictionary-service';

export default class ResultBox extends Component {
    dictionary = new DictionaryService();
    state = {
        item: null
    }
    
    componentDidMount() {
        this.onUpdateItem();
        
    }


    onUpdateItem = () => {
        this.dictionary.getWord('good', 'rhymes')
        .then(this.onItemLoaded)
    }

    onItemLoaded = (res) => {
        this.setState({
            item: res.rhymes.all[0]
        })
        console.log(this.state.item);

    }

    render() {
        return(
        <>
            <h3>Result Box</h3>
            <p>{this.state.item}</p>
        </>
        )
    }
}