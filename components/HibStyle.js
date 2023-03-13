import { StyleSheet } from 'react-native';

const fontBase = {
    fontSize: 18,
    fontWeight: 'bold',
}

const myShadow = {
    elevation: 4, //android shadow ?
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
}

const rows = {
    row: {
        marginVertical: 8,
        flexDirection: 'row',
        fontSize: 24,
        justifyContent: 'center'
    },
    rowTitle: {
        ...fontBase,
        color: '#090'
    },
    rowValue: {
        ...fontBase,
        color: '#f60'
    },
}

const articals = {
    ARTitle: {
        color: '#333',
        fontSize: 21,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#090',
        marginBottom: 8
    },
    ARTxt: {
        color: '#333',
        fontSize: 16
    },
}

const modals = {
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        marginTop:100,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
}

const HibStyle = () => {
    const styles = StyleSheet.create({
        ...rows,
        ...articals,
        ...modals,
        MainPage: {
            marginTop: 50,
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
        artical: {
            color: '#333',
            fontSize: 16
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
        },

        buttonContainer: {
            flexDirection: 'row'

        },

        myButton: {
            color: "#f00"
        },

        ViewBlock: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 8,
        },

        ViewCard: {
            ...myShadow,
            backgroundColor: '#fff',
            marginBottom: 8,
            padding: 16,
            width: '90%',
            borderRadius: 8,

        }
    });

    return (styles)
}


export default HibStyle