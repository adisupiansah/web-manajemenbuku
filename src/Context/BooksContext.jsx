// create context
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import {API_URL} from '../Format/API'

const BooksContext = createContext();

// create provider
const BooksProvider = ({children}) => {
    // state untu mengambil data buku dari db.json
    const [books, setBooks] = useState([]); 

    useEffect(() => {
        axios.get(API_URL)
        .then((response) => {
            setBooks(response.data);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
    }, [])

    return (
        <BooksContext.Provider value={{books, setBooks}}>
            {children}
        </BooksContext.Provider>    
    )
}

export { BooksContext, BooksProvider };
