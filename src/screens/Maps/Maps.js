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
                latitude: -25.7466469,
                longitude: -53.0564199,
                latitudeDelta: 0.0020,
                longitudeDelta: 0.002,
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
                        <Button buttonAgendar title="Agendar horário" />
                    </MapView.Callout>
                </MapView.Marker>
            </MapView>
            <View style={styles.containerAbaixo}>
                <Text style={{fontSize: 22, textAlign:'center',paddingTop:30,}}>Cidade                         Academias disponíveis</Text>
                <Text style={{fontSize: 18, textAlign:'center',paddingBottom:40,}}>Dois Vizinhos - PR                                     6 academias</Text>
            </View>
        </View>
    );
}