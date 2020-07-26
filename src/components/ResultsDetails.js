import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const ResultsDetails = ({ result }) => {
    return <View style={styles.container}>
        <Image source={{ uri: result.image_url }} style={styles.image} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars , {result.review_count} Reviews</Text>

    </View>
}



const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        borderRadius: 4,
        height: 120
    },
    name: {
        fontWeight: 'bold',
    }

})



export default ResultsDetails