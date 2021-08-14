import React from 'react';
import styles from './styles'
import MapView from 'react-native-maps';
import { View, Text } from 'react-native';

export default props => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                loadingEnabled={true}
                region={{
                latitude: -25.7466469,
                longitude: -53.0564199,
                latitudeDelta: 0.0010,
                longitudeDelta: 0.001,
                }}
            >
                <MapView.Marker
                    coordinate={{latitude: -25.7466469,
                    longitude: -53.0564199,}}
                    title={"Academia Superação"}
                    description={"Associada ao GymTimer, a academia oferece a opção do treino por hora"}
                    image={require('../../assets/images/acad.png')}
                />
            </MapView>
            <View style={styles.containerAbaixo}>
                <Text style={{fontSize: 22, textAlign:'center',paddingTop:30,}}>Cidade                         Academias disponíveis</Text>
                <Text style={{fontSize: 18, textAlign:'center',paddingBottom:40,}}>Dois Vizinhos - PR                                     6 academias</Text>
            </View>
        </View>
    );
}