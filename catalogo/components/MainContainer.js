import {Text, View, Image} from 'react-native';
import styles from '../styles/styles';
import DynamicList from './DynamicList';

export default function MainContainer() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../assets/logo.png')} 
                    style={styles.logo}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.textBody}>Yankees players</Text>
                <DynamicList/>
            </View>
        </View>
    );
}