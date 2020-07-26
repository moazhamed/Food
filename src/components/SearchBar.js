import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                value={term}
                onEndEditing={onTermSubmit}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onTermChange}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        height: 50,
        marginBottom: 10,
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        color: "black",
        alignSelf: 'center',
        marginHorizontal: 15
    }
})


export default SearchBar