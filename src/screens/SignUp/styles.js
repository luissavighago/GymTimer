import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flexGrow: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
    },
    containerTermos:{
        flexGrow: 1,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    },
    containerForms: {
        width: Dimensions.get('window').width,
        backgroundColor: '#0496FF',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 50,
    },
    label: {
        color: '#fff',
        fontSize: 25,
        paddingBottom: 10
    },
    image: {
        display: 'flex',
        resizeMode: 'contain',
        margin: 20
    },
    input: {
        padding: 15,
        width: Dimensions.get('window').width/1.5,
        backgroundColor: '#fff',
        borderRadius: 50,
        textAlign: 'center',
        borderWidth: 1,
        marginBottom:10,
        borderColor: '#fff',
    },
    checkboxContainer: {
        flexDirection: "row",
        alignContent:"center",
        display:"flex",
        alignItems:"center",
    },
    checkbox: {
        alignSelf: "center",
    },
    txtcheck:{
        color: "#fff"
    },
    label2titulo:{
        fontSize: 24,
        paddingBottom:10
    },
    label2:{
        fontSize: 18,
        color: "#000",
        paddingBottom: 5,
    },
})