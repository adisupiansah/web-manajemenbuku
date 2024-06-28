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
        axios.get(`${API_URL}/dbmanajemen.json`)
        .then((response) => {
            const data = response.data;
            if(data){
                const booksArray = Object.entries(data).map(([key, value]) => {
                    return {
                        id: key,
                        ...value
                    }
                })
                setBooks(booksArray)
            }
        })
        .catch((error) => {
            console.error('woy error:', error)
        })
    }, [])

    return (
        <BooksContext.Provider value={{books, setBooks}}>
            {children}
        </BooksContext.Provider>    
    )
}

export { BooksContext, BooksProvider };
