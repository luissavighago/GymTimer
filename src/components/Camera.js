import React, { Component } from "react";
import {
    View,
    WebView,
    Text,
    Linking,
    Dimensions,
    StyleSheet,
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import ModalWebView from './ModalWebView'

export default class QRCodeScreen extends Component {

    state = {
        modalVisible: false,
        success: null,
        url: '',
    };

    openLink = () => {
        Linking.openURL(this.state.url).catch(err =>
        alert("An error occured", err)
        );
        this.setState({ success: false })
    };

    handleButton = () => {
        this.setState({ modalVisible: !this.state.modalVisible, success: false })
    }

    onSuccess = async (e) => {
        await this.setState({ success: true, modalVisible: true, url: e.data });
    };

    render() {
        return (
        <View style={styles.container}>
            <QRCodeScanner
                onRead={this.onSuccess}
                showMarker={true}
                checkAndroid6Permissions={true}
                cameraStyle={styles.cameraContainer}
            />

            <ModalWebView
                handleButton={this.handleButton}
                modalVisible={this.state.modalVisible}
                url={this.state.url}
                openLink={this.openLink}
            />

        </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
},

touchable: {
    padding: 16
},

text: {
    fontSize: 21,
    color: "rgb(0,122,255)"
},

cameraContainer: {
    height: Dimensions.get('window').height,
}

});


// import React, { useState } from "react";
// import {
//     View,
//     Text,
//     Linking,
//     Dimensions,
//     StyleSheet,
// } from "react-native";

// import QRCodeScanner from "react-native-qrcode-scanner";
// import ModalWebView from './ModalWebView'

// export default props => {

//     const [ modalVisible, setModalVisible ] = useState(false)
//     const [ success, setSuccess ] = useState(null)
//     const [ url, setUrl ] = useState('')

//     openLink = () => {
//         Linking.openURL(url).catch(err =>
//             alert("Não foi possível abrir o link!", err)
//         );
//         setSuccess(false)
//     }

//     handleButton = () => {
//         setModalVisible(!modalVisible)
//         setSuccess(false)
//         scanner.reactivate()
//     }

//     onSuccess = (e) => {
//         setModalVisible(true)
//         setSuccess(true)
//         setUrl(e.data)
//     }

//     return (
//         <View style={styles.container}>
//             <QRCodeScanner
//                 onRead={onSuccess}
//                 showMarker={true}
//                 checkAndroid6Permissions={true}
//                 ref={(elem) => { scanner = elem }}
//                 cameraStyle={styles.cameraContainer}
//             />
//             <ModalWebView
//                 handleButton={handleButton}
//                 modalVisible={modalVisible}
//                 url={url}
//                 openLink={openLink}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "black"
//     },

//     touchable: {
//     padding: 16
//     },

//     text: {
//     fontSize: 21,
//     color: "rgb(0,122,255)"
//     },

//     cameraContainer: {
//     height: Dimensions.get('window').height,
//     }

// });