import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    container:{
        flexGrow: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    imageContainer:{
        alignItems: 'center',
    },
    image: {
        width: (Dimensions.get('window').width)/3,
        height: (Dimensions.get('window').width)/3,
        marginTop: 40,
        borderColor: '#0496FF',
        borderWidth: 2,
        borderRadius: 100, 
        padding: 50,
    },
    title: {
        fontSize: 20,
        paddingTop: 15,
        textAlign: 'center',
    },
    containerOptions: {
        justifyContent:"flex-start",
        alignItems: 'center'
    },
    containerButtons:{
        width: Dimensions.get('window').width/ 1.3,
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    containerForm:{
        width: Dimensions.get('window').width/ 1.5,
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input:{
        borderWidth: 1,
        borderColor: '#0496FF',
        marginBottom: 10,
        borderRadius: 100,
        paddingHorizontal: 15,
        width:'100%',
        height:40,
    },
    label:{

    },
})