import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    const [results, dispatch] = useReducer('')

    const dispatch = (newResults) => {
        return [...results, ...newResults]
    }

    const filterResutsByPrice = (price) => {
        //price  === '$' || '$$' || '$$$'
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar term={term}
                onTermSubmit={() => searchApi(term)}
                onTermChange={setTerm} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResutsByPrice('$')}
                    title="Cost Effective" />
                <ResultsList
                    results={filterResutsByPrice('$$')}
                    title="Bit Pricier" />
                <ResultsList
                    results={filterResutsByPrice('$$$')}
                    title="Big Spender" />
            </ScrollView>
        </>


    )

}


const styles = StyleSheet.create({


})


export default SearchScreen