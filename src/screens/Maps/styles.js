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
    containerCallout:{
        padding:20,
        margin:0,
        borderRadius: 10,
    },
    txtCallout1:{
        color: '#000',
        marginBottom: 20
    },
    txtCallout:{
        color: '#000',
    },
})