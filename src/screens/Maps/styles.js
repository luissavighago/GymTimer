import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    map: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        ...StyleSheet.absoluteFillObject,
    },
    containerAbaixo:{
        position: 'absolute',
        bottom: 0,
        backgroundColor:'#fff',
        width: Dimensions.get('window').width,
        justifyContent: 'space-around',
    },
    containerCallout:{
        padding:20,
        margin:0,
        backgroundColor: '#0496FF',
        borderRadius: 10,
        borderColor:'#0496FF',
    },
    txtCallout1:{
        color: '#fff',
        marginBottom: 20
    },
    txtCallout:{
        color: '#fff',
    },
})