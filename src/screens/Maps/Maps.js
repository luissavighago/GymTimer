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
                    coordinate={{latitude: -25.7499735,
                    longitude: -53.0531101,}}
                    image={require('../../assets/images/acad.png')}
                    //ok
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Academia Fit</Text>
                        <Text style={styles.txtCallout}>Av. Rio Grande do Sul</Text>
                        <Text style={styles.txtCallout}>Centro, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{latitude: -25.751319,
                    longitude: -53.0598938,}}
                    image={require('../../assets/images/acad.png')}
                    //ok
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Academia Cross</Text>
                        <Text style={styles.txtCallout}>Av. Rio Grande do Sul, nº 751</Text>
                        <Text style={styles.txtCallout}>Centro Sul, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{latitude: -25.7490458,
                    longitude: -53.0514779}}
                    image={require('../../assets/images/acad.png')}
                    //ok
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Academia Superação</Text>
                        <Text style={styles.txtCallout}>Av. Pres. Kenedy, nº 80</Text>
                        <Text style={styles.txtCallout}>Centro Sul, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{latitude: -25.7469864,
                    longitude: -53.0565588}}
                    image={require('../../assets/images/acad.png')}
                    //ok
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Academia DV</Text>
                        <Text style={styles.txtCallout}>R. Souza Naves, nº 37</Text>
                        <Text style={styles.txtCallout}>Centro, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{latitude: -25.7462985,
                    longitude: -53.0546799}}
                    image={require('../../assets/images/acad.png')}
                    //ok
                >
                    <MapView.Callout style={styles.containerCallout}>
                        <Text style={styles.txtCallout1}>Academia Super</Text>
                        <Text style={styles.txtCallout}>R. Zacarias de Vasconcelos</Text>
                        <Text style={styles.txtCallout}>Centro, Dois Vizinhos - PR</Text>
                    </MapView.Callout>
                </MapView.Marker>
            </MapView>
        </View>
    );
}