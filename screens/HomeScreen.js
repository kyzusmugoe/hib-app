import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Button, Modal, Pressable, Switch } from 'react-native';


import HibStyle from '../components/HibStyle'

const styles = HibStyle()

const HomeScreen = ({ logOut }) => {
    const [modalVisible, setModalVisible] = useState(false)
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView style={styles.MainPage}>
            <View style={styles.ViewBlock}>
                <View style={styles.ViewCard}>
                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>我的業績：</Text>
                        <Text style={styles.rowValue}>1,000,000</Text>
                    </View>
                </View>
                <View style={styles.ViewCard}>
                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>我的業績：</Text>
                        <Text style={styles.rowValue}>1,000,000</Text>
                    </View>
                </View>
                <View style={styles.ViewCard}>
                    <Text style={styles.ARTitle}>標題</Text>
                    <Text style={styles.ARTxt}>文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容!!</Text>
                </View>
                <View style={styles.ViewCard}>
                    <View style={styles.row}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Hide Modal</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}>
                            <Text style={styles.textStyle}>Show Modal</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.ViewCard}>
                    <Switch
                        trackColor={{false: '#ccc', true: '#090'}}
                        thumbColor={isEnabled ? '#fff' : '#eee'}
                        ios_backgroundColor="#aaa"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>

            <View style={styles.ViewBlock}>
                <Button title="登出" onPress={() => { logOut() }} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen

