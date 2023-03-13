import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Button, Image, TouchableOpacity } from 'react-native';
//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import HomeScreen from './screens/HomeScreen';
import VirtualizedListScreen from './screens/VirtualizedListScreen';
import SectionListScreen from './screens/SectionListScreen';
import LoginScene from './screens/LoginScene';
import MyMealScene from './screens/MyMealScene';

const Stack = createNativeStackNavigator();


export default function App() {
	const [isLogin, setIsLogin] = useState(false)



	const Stack = createNativeStackNavigator()
	const BTab = createBottomTabNavigator()



	const Home = () => {
		return (
			<HomeScreen logOut={() => {
				setIsLogin(false)
			}} />
		)
	}

	const Login = () => {
		return (
			<LoginScene auth={(isLogin) => {
				setIsLogin(isLogin)
			}} />
		)
	}

	const MainBTabPage = () =>
		<BTab.Navigator initialRouteName='one' screenOptions={{ headerShown: false }}>
			<BTab.Screen name="one" component={Home} options={{ title: "首頁" }} />
			<BTab.Screen name="SectionList" component={SectionListScreen} />
			<BTab.Screen name="VirtualizedList" component={VirtualizedListScreen} />
			<BTab.Screen name="four" component={VirtualizedListScreen} />
			<BTab.Screen name="meal" component={MyMealScene} />
		</BTab.Navigator>

	return (
		<>
			<StatusBar style='dark' />
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
					{
						isLogin ? (
							<Stack.Screen name="Main" component={MainBTabPage} options={{ title: "首頁" }} />
						) : (
							<>
								<Stack.Screen name="Login" component={Login} />
							</>
						)
					}
				</Stack.Navigator>
			</NavigationContainer>
		</>
	)
}
