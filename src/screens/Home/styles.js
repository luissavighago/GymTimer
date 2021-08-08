import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    container:{
        flexGrow: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
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
    }
})