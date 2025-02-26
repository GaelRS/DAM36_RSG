import { Text, View} from 'react-native';
import styles from '../styles/styles';
import DynamicList from './DynamicList';

export default function MainContainer() {
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textTitle}>FlatList en React Native</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.textBody}>Esto es un ejemplo de como utilizar FlatList en React Native</Text>
            <DynamicList/>
        </View>
        </View>
    )
}