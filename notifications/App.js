import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';
import React,{useEffect} from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () =>({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  })
})

export default function App() {

  useEffect(()=>{
    registerPushNotifications();
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {  
      console.log('Notificacion recibida',notification);
    });
    return ()=>{
      Notifications.removeNotificationSubscription(notificationListener);
    }
  }, [])

  const registerPushNotifications = async () => {
    if(!Device.isDevice){
      Alert.alert('Error', 'Debes de usar un dispositivo físico');
      return;
    }
    const{ status} = await Notifications.requestPermissionsAsync();
    if(status !== 'granted'){
     Alert.alert('Error', 'No se han concedido permisos para las notificaciones');
     return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    Alert.alert('Token generado');
  }

  const setNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content:{
        title: 'Hola',
        body: 'Soy una push notification',
        data: {ejemplo: 'Dummy data'}
      },
      trigger:{seconds: 1}
    })
  }

  
 
  return (
    <View style={styles.container}>
      <Text>Prueba de push notifications</Text>
      <Button 
        title='Enviar notificación'
        onPress={() => {setNotification()}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 20,

  },
});
