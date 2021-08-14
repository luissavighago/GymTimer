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
    }
})