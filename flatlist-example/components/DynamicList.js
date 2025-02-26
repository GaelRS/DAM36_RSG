import { Text, View, FlatList} from 'react-native';
import styles from '../styles/styles';
import data from '../data/data';

export default function DynamicList() {
    return(
        <FlatList
            data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
                <View>
                <Text style={styles.flatListText}>{item.name}</Text>
                <Text style={styles.flatListText}>{item.age}</Text>
                </View>
                
            )}
            style={styles.flatList}
        />
    )
}