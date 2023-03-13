import { useLayoutEffect } from 'react'

import { View, FlatList, StyleSheet, Pressable } from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native'
import { MEALS, CATEGORIES } from '../data/dammy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = () => {

    const route = useRoute()
    const navigation = useNavigation()

    const catID = route.params.categoryID
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0
    })


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id == catID).title

       // console.log(categoryTitle)

        navigation.setOptions({
            title: categoryTitle
        })

    }, [catID, navigation])

    const renderMealItem = (itemData) => {

        return <MealItem itemData={itemData} />
    }

    

    return (
        <View>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}
export default MealsOverviewScreen

const styles = StyleSheet.create({
    flex: 1,
    padding: 16
})