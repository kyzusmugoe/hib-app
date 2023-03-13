import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, Pressable, StyleSheet} from "react-native"


const MealItem  = ({itemData})=>{
    const navigation = useNavigation()
    const detailHandler =()=>{
        navigation.navigate('Detail', {
            title:itemData.item.title,
            imageUrl:itemData.item.imageUrl
        })
    }
    return(
        <View>
            <Pressable onPress={detailHandler}>
                <View>
                    <Image source={{uri:itemData.item.imageUrl}} style={styles.images}/>
                    <Text style={styles.title}>{itemData.item.title}</Text>
                </View>
                <View>
                    <Text>{itemData.item.duration}m</Text>
                    <Text>{itemData.item.complexity.toUpperCase()}</Text>
                    <Text>{itemData.item.affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin:16
    },
    images:{
        width: '100%',
        height: 200,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign:'center',
    }
})