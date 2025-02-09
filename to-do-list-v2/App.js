
import{useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed';


export default function App() {

  const items=[
    {id:'checked1',title:'Leche'},
    {id:'checked2',title:'Pan'},
    {id:'checked3',title:'Huevos'},
    {id:'checked4',title:'Mantequilla'},
  ];

  const [checkedItems,setCheckedItems]=useState({
    checked1:false,
    checked2:false,
    checked3:false,
    checked4:false,
  });

  const handleCheck = (item) => {
    setCheckedItems((prevState)=>({
      ...prevState,
      [item]:!prevState[item]
    }));
  };

  
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
          {items.map((item)=>(
            <CheckBox
              key={item.id}
              title={item.title}
              containerStyle={styles.CheckBox}
              checked={checkedItems[item.id]}
              onPress={()=>handleCheck(item.id)}
            />
          ))}
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