import React from 'react'
import { View, Text } from 'react-native'
import CovidMess from '../../components/CovidMess'
import HomeMap from "../../components/HomeMap/index"
import HomeSearch from '../../components/HomeSearch'
const HomeScreen = (props) => {
    return (
        <View>
        <HomeMap></HomeMap>
        <CovidMess></CovidMess>

<HomeSearch></HomeSearch>
          

        </View>
    )
}

export default HomeScreen
