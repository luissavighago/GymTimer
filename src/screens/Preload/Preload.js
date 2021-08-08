import React from 'react';
import { View, StyleSheet, Image, GifImage } from 'react-native';
import gif from '../../assets/images/loading.gif'

export default props => {

    const load = setTimeout(()=>{
        props.navigation.navigate('SignIn')
    }, 2000);

    return (
        <View style={styles.container}>
            <Image source={gif} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: 400,
    }
});
