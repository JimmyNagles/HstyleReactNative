import React from 'react'
import { View, Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/Entypo'
import styles from "../../screens/HomeScreen/styles"
const CovidMess = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HairStylist Near you</Text>
            <Text style={styles.text}>Book a Professional From the comfort of your home in minutes</Text>
            {/* <Text style={styles.myIcon}><Icon name="clock" size={30} color="black"></Icon></Text> */}
        </View>
    )
}

export default CovidMess
