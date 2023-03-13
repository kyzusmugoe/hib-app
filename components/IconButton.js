import { Pressable, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"


const IconButton =({onPress})=>{
    
    
    return (
        <Pressable>
            <Ionicons name='menu' size={24} color='#fff' onPress={onPress}/>
            <Text>MENU</Text>
        </Pressable>
    )
}

export default IconButton