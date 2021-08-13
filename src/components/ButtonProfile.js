import React from 'react';
import { View,Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default props => {

    return(
        <TouchableOpacity style={styles.button} onPress={() => props.onClick()}>
            <View style={styles.container}>
                <View style={styles.labelIcon}>
                    {
                        props.icon != null ?
                            <Ionicons name={props.icon.name} size={props.icon.size} color={props.icon.color} />
                        :
                        null
                    }
                    <Text style={styles.label}>{props.title}</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={props.icon.size} color={props.icon.color} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        height: 50,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        /* backgroundColor: '#E0E0E0', */
        marginHorizontal: 5,
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    label:{
        fontSize: 20,
        color: '#000',
        marginLeft:5
    },
    labelIcon:{
        flexDirection: 'row',
        alignItems: 'center',
    },


})