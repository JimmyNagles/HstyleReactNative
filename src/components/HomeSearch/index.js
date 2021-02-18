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
 
<Icon name="clock" size={10} color="#ffffff"></Icon>


</View>


<Text style={styles.destinationText}>Book Hstylist</Text>
</View>


{/* Second Row */}

<View style={styles.row}>

    
<View style={[styles.IconContainer,{ backgroundColor:"#218cff"}]}>

<Icon name="clock" size={10} color="#ffffff"></Icon>


</View>


<Text style={styles.destinationText}>Book Manicure</Text>
</View>


{/* Third Row */}
<View style={styles.row}>

    
<View style={[styles.IconContainer,{ backgroundColor:"#218cff"}]}>

<Icon name="clock" size={10} color="#ffffff"></Icon>


</View>


<Text style={styles.destinationText}>Book EyeBrows</Text>
</View>








        </View>
    )
}

export default HomeSearch
