
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Button, Image, TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MyMealScene = ()=>{
    
	const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator initialRouteName='MealCategories' screenOptions={{
			headerStyle: {
				backgroundColor: '#090'
			},
			headerTintColor: '#fff',
			/*
			contentStyle:{
				backgroundColor:"#0cf"
			}*/
		}}>
			<Stack.Screen
				name="MealCategories"
				component={CategoryScreen}
			/*
			options={{
				title:"ALL",
			}}
			*/
			/>
			<Stack.Screen
				name="MealsOverview"
				component={MealsOverviewScreen}
			/*
			options={{
				title:"INSIDE"
			}}
			*/
			/>
			<Stack.Screen
				name="Detail"
				component={MealDetailScreen}
			/>
		</Stack.Navigator>
    )
}

export default MyMealScene