import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ResultsDetails from '../components/ResultsDetails'
import yelp from '../api/yelp'
import { FlatList } from 'react-native-gesture-handler'



const ResultsShowScreen = ({ navigation }) => {
    const [data, setData] = useState(null)

    const id = navigation.getParam('id')

    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`)
        setData(response.data)
    }

    useEffect(() => {
        getResults(id)
    }, [])

    if (!data) {
        return null
    }

    return (
        <View>
            <FlatList
                data={data.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            >


            </FlatList>
        </View>
    )

}


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen