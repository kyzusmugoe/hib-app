
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { CATEGORIES } from '../data/dammy-data'
import { StatusBar } from 'expo-status-bar'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {

    const renderCategoriesItem = itemData => {

        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryID: itemData.item.id,

            })
        }

        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />
    }

    return (
        <>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoriesItem}
                numColumns={2}
            />
        </>
    )
}

export default CategoriesScreen