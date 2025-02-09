
import{useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed';


export default function App() {

  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const checkedHandler = () => {
    checked ? setChecked(false) : setChecked(true);
  }
  const checkedHandler2 = () => {
    checked2 ? setChecked2(false) : setChecked2(true);
  }
  const checkedHandler3 = () => {
    checked3 ? setChecked3(false) : setChecked3(true);
  }
  const checkedHandler4 = () => {
    checked4 ? setChecked4(false) : setChecked4(true);
  }
  
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
          <CheckBox title="Leche" containerStyle={styles.CheckBox} checked={checked} onPress={checkedHandler} />
          <CheckBox title="Pan" containerStyle={styles.CheckBox} checked={checked2} onPress={checkedHandler2}/>
          <CheckBox title="Huevos" containerStyle={styles.CheckBox} checked={checked3} onPress={checkedHandler3} />
          <CheckBox title="Mantequilla" containerStyle={styles.CheckBox} checked={checked4} onPress={checkedHandler4}/>
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
