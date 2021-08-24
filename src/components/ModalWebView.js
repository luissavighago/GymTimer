import React from "react";
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Modal
} from "react-native";
import PropTypes from 'prop-types';
import WebView from 'react-native-webview'
import styles from '../screens/Home/styles'
import dataDB from '../dataDB';
import Lottie from 'lottie-react-native'
import dumbell from '../assets/images/dumbell.json'

const users = dataDB.users
const gym = dataDB.gym
const { width, height } = Dimensions.get("window");

const ModalWebView = props => (
    <Modal animationType="slide" transparent={false} visible={props.modalVisible} >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <WebView
                automaticallyAdjustContentInsets={false}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />

            <View style={styles.container}>
                <Text style={styles.title}>Olá {users[0].name}!</Text>
                <Text style={styles.txt}>Treino em andamento</Text>
                <View style={styles.containerImage}>
                    <Lottie style={styles.gif} source={dumbell} autoPlay={true} loop/>
                </View>
                <Text>{props.url}</Text>
                <TouchableOpacity style={{
                    padding: 15,
                    width: Dimensions.get('window').width/2,
                    backgroundColor: '#0496FF',
                    marginBottom: 30,
                    borderColor: '#D9EEFC',
                    borderRadius:30,
                }} onPress={props.handleButton}>
                    <Text style={{color: '#fff', textAlign:'center', fontSize:20}}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);

ModalWebView.propTypes = {
    modalVisible: PropTypes.bool.isRequired,
    url: PropTypes.string,
    openLink: PropTypes.func,
    handleButton: PropTypes.func.isRequired,
}

export default ModalWebView;

// import React from "react";
// import {
//     View,
//     Text,
//     Dimensions,
//     Modal,
//     TouchableOpacity,
// } from "react-native";
// import WebView from "react-native-webview";
// import PropTypes from 'prop-types';
// import styles from '../screens/Home/styles'
// import Lottie from 'lottie-react-native'
// import dumbell from '../assets/images/dumbell.json'
// import dataDB from '../dataDB';

// const users = dataDB.users
// const { width, height } = Dimensions.get("window");

// export default props => {

//     <Modal animationType="slide" transparent={false} >
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//             <View style={{ width: width - 50, height: height - 70 }}>
//                 <WebView
//                     automaticallyAdjustContentInsets={false}
//                     source={{ uri: props.url }}
//                     javaScriptEnabled={true}
//                     domStorageEnabled={true}
//                     startInLoadingState={true}
//                     style={{ flex: 1 }}
//                 />
//             </View>

//             <View style={styles.container}>
//                 <Text style={styles.title}>Olá {users[0].name}!</Text>
//                 <Text style={styles.txt}>Treino em andamento</Text>
//                 <View style={styles.containerImage}>
//                     <Lottie style={styles.gif} source={dumbell} autoPlay={true} loop/>
//                 </View>
//                 <TouchableOpacity style={{
//                     padding: 15,
//                     width: Dimensions.get('window').width/2,
//                     backgroundColor: '#0496FF',
//                     marginBottom: 30,
//                     borderColor: '#D9EEFC'
//                 }} onPress={() => props.navigation.navigate('Home')}>
//                     <Text style={{color: '#fff'}}>Finalizar</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* <View
//                 style={{
//                     backgroundColor: "#FFF",
//                     height: 30,
//                     paddingTop: 10,
//                     width: width - 50,
//                     flexDirection: "row",
//                     justifyContent: "space-around"
//                 }}
//                 >
//                 <TouchableOpacity onPress={props.openLink}>
//                     <Text>Abrir no navegador</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={props.handleButton}>
//                     <Text>Ler outro QRCode</Text>
//                 </TouchableOpacity>
//             </View>
//                 const ModalWebView = () => {
//                     modalVisible: PropTypes.bool.isRequired;
//                     url: PropTypes.string.isRequired;
//                     openLink: PropTypes.func.isRequired;
//                     handleButton: PropTypes.func.isRequired;
//                 }
//             */}
//         </View>
//     </Modal>
// }