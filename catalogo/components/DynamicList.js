import { FlatList, Text, View, Image } from "react-native";
import styles from '../styles/styles';
import data from '../data/data';

export default function DynamicList() {
    return(
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (

                <View style={styles.flatListView}>
                    <Image 
                        source={{uri: item.image}}
                        style ={styles.flatListImage}
                    />
                    <View>
                        <Text style={styles.flatListName}>{item.name}</Text>
                        <Text style={styles.flatListPosition}>{item.position}</Text>
                        <Text style={styles.flatListJerseyNumber}>#{item.jersey_number}</Text>
                    </View>
                </View>
            )}
            style={styles.flatList}
        />
    )
}