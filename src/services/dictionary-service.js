export default class DictionaryService {
    constructor() {
        this._apiBase = 'https://wordsapiv1.p.rapidapi.com/words/';
    }

    getWord = async (word, sourse) => {
        const res = await fetch(`${this._apiBase}${word}/${sourse}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "48d6f5f608msh8d83d01541528ddp1f39e1jsna9be5a4e36c3",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${word} received status ${res.status}`);
        }
        return await res.json();
    }

}

// const dict = new DictionaryService();

// dict.getWord('good', 'rhymes')
//     .then(res => console.log(res));

