import React from 'react';
import styles from './styles'
import MapView from 'react-native-maps';
import { View, Text } from 'react-native';
import Button from '../../components/Button';

export default props => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                loadingEnabled={true}
                region={{
                latitude: -25.7521094,
                longitude: -53.0566417,
                latitudeDelta: 0.010,
                longitudeDelta: 0.012,
                }}
            >
                <MapView.Marker
                    coordinate={{latitude: -25.7466469,
                    longitude: -53.0564199,}}
                    image={require('../../assets/images/acad.png')}
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Academia Tal</Text>
                        <Text style={styles.txtCallout}>Rua tal, nº xx</Text>
                        <Text style={styles.txtCallout}>Bairro tal, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{latitude: -25.7487849,
                    longitude: -53.0513077,}}
                    image={require('../../assets/images/acad.png')}
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Outra Academia Tal</Text>
                        <Text style={styles.txtCallout}>Rua tal, nº xx</Text>
                        <Text style={styles.txtCallout}>Bairro tal, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{latitude: -25.7498785,
                    longitude: -53.0532921}}
                    image={require('../../assets/images/acad.png')}
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Mais uma Academia Tal</Text>
                        <Text style={styles.txtCallout}>Rua tal, nº xx</Text>
                        <Text style={styles.txtCallout}>Bairro tal, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{latitude: -25.7417815,
                    longitude: -53.060494}}
                    image={require('../../assets/images/acad.png')}
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Academia Tal</Text>
                        <Text style={styles.txtCallout}>Rua tal, nº xx</Text>
                        <Text style={styles.txtCallout}>Bairro tal, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{latitude: -25.7509035,
                    longitude: -53.0609014}}
                    image={require('../../assets/images/acad.png')}
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Outra Academia Tal</Text>
                        <Text style={styles.txtCallout}>Rua tal, nº xx</Text>
                        <Text style={styles.txtCallout}>Bairro tal, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
            </MapView>
        </View>
    );
}