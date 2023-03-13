
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import HibStyle from '../components/HibStyle'

const txtChange = enteredTxt => {
    //console.log(enteredTxt)
    setMyTxt(enteredTxt)
}

const LoginScene = ({auth}) => {
    
	const [myInputTxt, setMyInputTxt] = useState("")
    const [myTxt, setMyTxt] = useState("")
	const [todoList, setTodoList] = useState([])

    
    const styles = HibStyle()

	const addTodo = () => {
        setTodoList(currentList => [...currentList, myTxt])
	}
   
    const accountHandler = (enterdTxt) => {
		//console.log(enterdTxt)
		setMyInputTxt(enterdTxt)
	}

    const checkLogin = ()=>{
        setMyTxt('模擬登入成功！')
        setTimeout(() => {
            auth(true)
        }, 1000);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome to HIB APP!</Text>
                <TextInput style={styles.myInput} placeholder='請輸入帳號' onChangeText={accountHandler}></TextInput>
                <TextInput style={styles.myInput} passwordRules placeholder='請輸入密碼'></TextInput>
                <Text>{myTxt}</Text>
            </View>
            {/** 
            <ScrollView style={styles.listContainer}>
                {
                    todoList.map((item, index) =>
                        <View style={styles.listBar} key={"item" + index}>
                            <Text>{item}</Text>
                        </View>
                    )
                }
            </ScrollView>
            */}
            <View style={styles.buttonContainer}>              
                <TouchableOpacity onPress={checkLogin}>
                    <Image source={require('../assets/Button.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScene

/*
const styles = StyleSheet.create({
    title:{
        marginVertical:40,
        color:'#090',
        fontSize:24,
    },
	listBar: {
		backgroundColor: '#fc0',
		color: "#fff",
		borderRadius: 8,
		marginBottom: 4,
		paddingHorizontal: 16,
		paddingVertical: 8
	},
	myInput: {
		fontSize: 18,
		padding: 10,
		marginBottom: 20,
		borderBottomWidth: 1,
		borderColor: "#090"
	},
	myTxt: {
		margin: 16, padding: 16, borderWidth: 5, borderColor: '#fc0', fontSize: 32,
	},
	container: {
        flex:1,
        backgroundColor:'#fc0',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	buttonContainer: {
		flexDirection: 'row'

	},
	myButton: {
		color: "#f00"
	}
});
*/