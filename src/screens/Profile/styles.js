import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    container:{
        flexGrow: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#0496FF',
    },
    imageContainer:{
        alignItems: 'center',
    },
    image: {
        width: (Dimensions.get('window').width)/2.5,
        height: (Dimensions.get('window').width)/2.5,
        marginTop: 40,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 100,
        padding: 50,
        backgroundColor:'#fff'
    },
    title: {
        fontSize: 25,
        paddingVertical: 15,
        textAlign: 'center',
        color:'#fff'
    },
    containerOptions: {
        flexGrow: 1,
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        paddingVertical: 50,
    },
    containerButtons:{
        width: Dimensions.get('window').width,
        justifyContent: 'space-around',
        alignItems: 'center'
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
    containerButtons2:{
        flexDirection: "row",
        display:"flex"
    }
})