import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetails from './ResultsDetails'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {


    if (!results.length) {
        return null
    }

    return <View style={styles.container}>
        <Text style={styles.titleStyles}>{title}</Text>
        <FlatList
            data={results}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Result', { id: item.id }) }}>
                        <ResultsDetails result={item} />
                    </TouchableOpacity>

                )
            }}

        />
    </View>
}


const styles = StyleSheet.create({
    titleStyles: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        marginBottom: 10
    }
})


export default withNavigation(ResultsList)