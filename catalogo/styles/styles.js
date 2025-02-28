import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',     
    },
    header:{
        backgroundColor:'#122A5C',
        width:'100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 200,
        height: 300,
        resizeMode: 'contain',
        marginTop: 20
    },
    body:{
        backgroundColor:'#F8F8FF ',
        width:'100%',
        height: '90%',
    },
    textBody:{
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
        color: '#132448',
        fontWeight: 'bold',
    },
    flatList:{
        width:'100%',
        height:'100%',
    },
    flatListView:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#132448',
    },
    flatListImage:{
        width: 140,
        height: 140,
        margin: 10,
    },
    flatListName:{
        fontSize: 18,
        color: '#132448',
        fontWeight: 'bold',
    },
    flatListPosition:{
        fontSize: 15,
        color: '#132448',
    },
    flatListJerseyNumber:{
        fontSize: 15,
        color: '#132448',
    }
});

export default styles;