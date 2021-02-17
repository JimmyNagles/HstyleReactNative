import React from 'react'
import { View, Text } from 'react-native'
import styles from "./styles"

import  Icon  from 'react-native-vector-icons/Entypo'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const HomeSearch = () => {
    return (
        <View>
       

        {/* input box */}

<View style={styles.inputBox}>
    
<Text style={styles.inputText} >Where To?</Text>


<View style={styles.timeContainer}>

<Icon name="clock" size={20} color="black"></Icon>

<Text > When?</Text>

<MaterialIcons name={"keyboard-arrow-down"}size={20}></MaterialIcons>
</View>

</View>
    


        {/* Home Destination */}
 <View style={styles.row}>

    
    <View style={styles.IconContainer}>
 



</View>



</View>




        </View>
    )
}

export default HomeSearch
