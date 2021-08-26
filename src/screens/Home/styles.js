import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    container:{
        flexGrow: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding: 20
    },
    title: {
        fontSize: 30,
        paddingVertical:10
    },
    txt:{
        fontSize: 26,
    },
    containerImage:{
        padding:40
    },
    image: {
        display: 'flex',
        width: (Dimensions.get('window').width)/3,
        height: (Dimensions.get('window').width)/3,
    },
    gif: {
        display: 'flex',
        width: (Dimensions.get('window').width)/2,
        height: (Dimensions.get('window').width)/2,
    },
    historyList:{
        width: Dimensions.get('window').width/ 1.3,
    },
    historyTitle:{
        borderBottomColor: 'gray',
        borderTopWidth: 1,
        fontSize: 26,
        marginBottom:5,
    },
    rows:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    rowsText:{
        fontSize:18
    },
    timer:{
        marginTop: -180,
        color:'#0496FF',
        fontSize: 60,
        fontWeight: 'bold'
    },
    btnArea:{
        flexDirection:'row',
        marginTop: 70,
        height: 40,
    },
    botao:{
        flex:1 ,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ffffff',
        height: 40,
        margin: 17,
        borderRadius: 9
    },
    btnTexto:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#00aeef'
    }
})