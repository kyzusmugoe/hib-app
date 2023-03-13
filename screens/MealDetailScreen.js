

import { StyleSheet, Image, View, Text, Button } from 'react-native'
import { CATEGORIES } from '../data/dammy-data'
import { StatusBar } from 'expo-status-bar'
import CategoryGridTile from '../components/CategoryGridTile'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'


const MealDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    //const itemData = route.params.itemData

    const goList = () => {
        navigation.navigate('MealCategories')
    }

    const headerRightPressHandler=()=>{

    }
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=><IconButton onPress={headerRightPressHandler}/>
        })
    },[navigation])
    
    return (
        <View>

            <Image source={{ uri: route.params.imageUrl }} style={styles.images} />
            <Text>Detail-{route.params.title}</Text>
            <Button title='TOP' onPress={goList} />
        </View>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({

    images: {
        width: '100%',
        height: 200,
    },

})