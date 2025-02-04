
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>To-Do List</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextBody}>Lista de Compras: </Text>
        </View>

        <ScrollView style={styles.bodyContent}>
          <CheckBox title="Leche" containerStyle={styles.CheckBox}/>
          <CheckBox title="Pan" containerStyle={styles.CheckBox}/>
          <CheckBox title="Huevos" containerStyle={styles.CheckBox}/>
          <CheckBox title="Mantequilla" containerStyle={styles.CheckBox}/>
          <CheckBox title="Azúcar" containerStyle={styles.CheckBox}/>
          <CheckBox title="Sal" containerStyle={styles.CheckBox}/>
          <CheckBox title="Pimienta" containerStyle={styles.CheckBox}/>
          <CheckBox title="Aceite" containerStyle={styles.CheckBox}/>
          <CheckBox title="Harina" containerStyle={styles.CheckBox}/>
          <CheckBox title="Arroz" containerStyle={styles.CheckBox}/>
          <CheckBox title="Pasta" containerStyle={styles.CheckBox}/>
          <CheckBox title="Salsa de Tomate" containerStyle={styles.CheckBox}/>
          <CheckBox title="Queso" containerStyle={styles.CheckBox}/>
          <CheckBox title="Jamón" containerStyle={styles.CheckBox}/>
          <CheckBox title="Pollo" containerStyle={styles.CheckBox}/>
          <CheckBox title="Carne" containerStyle={styles.CheckBox}/>
          <CheckBox title="Pescado" containerStyle={styles.CheckBox}/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  navbar:{
    backgroundColor:'#16a085',
    height:'10%',
    width:'100%',
    marginTop: 0 ,
    textAlign:'justify',
    justifyContent:'center',
    
  },
  title:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    marginStart:20,
    marginTop:20,
  },
  body:{
    height:'90%',
    maxHeight:'100%',
    backgroundColor:'#ecf0f1'
  },
  titleContainer:{
    height:'10%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  titleTextBody:{
    color:'#000',
    fontSize:30,
    fontWeight:'bold'
  },
  bodyContent:{
    width:'100%',
    marginBottom: '10%',
  },
  CheckBox:{
    backgroundColor:'#ecf0f1',
    width:'50%',
    fontSize:15,
    marginLeft:'15%',
  }
});
