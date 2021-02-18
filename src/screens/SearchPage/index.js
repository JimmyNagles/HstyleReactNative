import React from 'react'
import { View, Text, TextInput,SafeAreaView } from 'react-native'
import styles from '../SearchPage/styles'

const SearchPage = () => {
    return (
        <SafeAreaView>
        <View style={styles.container}>
           

            <TextInput style={styles.InputText} placeholder="From"/>
            
            <TextInput  style={styles.InputText} placeholder="where To?"/>
        </View>

        </SafeAreaView>
    )
}

export default SearchPage
