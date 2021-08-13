import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles'
import { MapView } from 'react-native-maps'

export default props => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                loadingEnabled={true}
                region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
    );
}