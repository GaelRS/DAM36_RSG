import { StyleSheet, Text, View,Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.navbar}>
        <Image 
          source={require('./assets/candado.png')}
          style={styles.icon_candado}
        />
        <Text style={styles.user}>gael_rosasse</Text>
        <Image
          source={require('./assets/cambiar-cuenta.png')}
          style={styles.cambiar_cuenta}
        />
        <Image
          source={require('./assets/Threads.png')}
          style={styles.icon_threads}
        />
        <Image 
          source={require('./assets/mas.png')}
          style={styles.icon_mas}
        />
        <Image
          source={require('./assets/menu.png')}
          style={styles.icon_menu}
        />
      </View>

      <View style={styles.cuenta}>
        <Image
          source={require('./assets/Foto-perfil.jpg')}
          style={styles.foto_perfil}
        />
        <Image
          source={require('./assets/agregar-hist.png')}
          style={styles.agregar_hist}
        />
        <Text style={styles.npublicaciones}>
          9
        </Text>
        <Text style={styles.publicaciones}>
          publica...
        </Text>
        <Text style={styles.nseguidos}>
          269
        </Text>
        <Text style={styles.seguidos}>
          seguido...
        </Text>
        <Text style={styles.nseguidores}>
          622
        </Text>
        <Text style={styles.seguidores}>
          segui...
        </Text>
      </View>

      <View style={styles.info_perfil}>
        <Text style={styles.info}>
          Mexico, Qro📍{'\n'}
          Software Engineer Student👨‍💻{'\n'}
          💻FullStack Developer💻{'\n'}
          🔗interscode.com/
        </Text>
      </View>

      <View style={styles.conf}>
        <Text style={styles.editar_perfil}>
          Editar perfil
        </Text>
        <Text style={styles.compartir_perfil}>
          Compartir perfil
        </Text>
        <View style={styles.icon_invitacion}>
        <Image
          source={require('./assets/invitacion.png')}
          style={styles.icon}
        />
        </View>
      </View>

      <View style={styles.destacadas}>
        <Text style={styles.hdestacadas}>
          Historias destacadas
        </Text>
        <Text style={styles.editar}>
          Editar
        </Text>
      </View>

      <View style={styles.adestacadas}>
        <Image
            source={require('./assets/agregardest.png')}
            style={styles.icon_nhis}
        />
        <Text style={styles.htdestacadas}>
          Nuevo
        </Text>
      </View>

      <View style={styles.menufeed}>
        <Image
          source={require('./assets/menufeed.png')}
          style={styles.icon_menufeed}
        />
        <Image
          source={require('./assets/reels.png')}
          style={styles.icon_menufeed}
        />
        <Image
          source={require('./assets/compartidos.png')}
          style={styles.icon_menufeed}
        />
      </View>

      <View style={styles.feed}>
        <View style={styles.imagef}></View>
        <View style={styles.imagef}></View>
        <View style={styles.imagef}></View>
      </View>

      <View style={styles.feed}>
        <View style={styles.imagef}></View>
        <View style={styles.imagef}></View>
        <View style={styles.imagef}></View>
      </View>

      <View style={styles.menuP}>
        <Image
          source={require('./assets/inicio.png')}
          style={styles.icon_menuP}
        />
        <Image
          source={require('./assets/buscar.png')}
          style={styles.icon_menuP}
        />
        <Image
          source={require('./assets/mas.png')}
          style={styles.icon_menuP}
        />
        <Image
          source={require('./assets/reels2.png')}
          style={styles.icon_menuP}
        />
        <Image
          source={require('./assets/Foto-perfil.jpg')}
          style={styles.icon_perfil2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1114',
    width: '100%'
  },
  navbar: {
    backgroundColor: '#0d1114',
    height: 110,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  icon_candado: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  cambiar_cuenta: {
    width: 15,
    height: 15,
    marginLeft: 3
  },
  icon_mas: {
    width: 25,
    height: 25,
    marginLeft: 30
  },
  icon_menu: {
    width: 25,
    height: 25,
    marginLeft: 30
  },
  icon_threads: {
    width: 25,
    height: 25,
    marginLeft: 55
  },
  user: {
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 20,
    fontWeight: 'bold'
  },
  cuenta: {
    backgroundColor: '#0d1114',
    height: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30
  },
  foto_perfil:{
    width:95,
    height:95,
    borderRadius: 47
  },
  agregar_hist:{
    backgroundColor: '#f4f8fa',
    borderRadius: 15,
    width: 30,
    height: 30,
    left: -30,
    top: 35,
    borderColor: '#0d1114',
    borderWidth: 4
  },
  npublicaciones:{
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 18,
    fontWeight: 'bold',
    left: -15,
    top: -10
  },
  publicaciones:{
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 15,
    marginLeft: -23,
    top: 15
  },
  nseguidos:{
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 18,
    fontWeight: 'bold',
    left: 23,
    top: -10
  },
  seguidos:{
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 15,
    marginLeft: -10,
    top: 15
  },
  nseguidores:{
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 18,
    fontWeight: 'bold',
    left: 23,
    top: -10
  },
  seguidores:{
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 15,
    marginLeft: -10,
    top: 15
  },
  info_perfil:{
    backgroundColor: '#0d1114',
    height: 100,
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 40
  },
  info:{
    height: 100,
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 15
  },
  conf: {
    backgroundColor: '#0d1114',
    height: 40,
    width: '97%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7
  },
  editar_perfil: {
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 16,
    flex: 1,  
    textAlign: 'center',  
    borderWidth: 2,  
    borderColor: '#f4f8fa',  
    paddingHorizontal: 10,  
    marginHorizontal: 3,  
    borderRadius: 7,  
    lineHeight: 30
  },
  compartir_perfil: {
    color: '#f4f8fa',
    fontFamily: 'Sans',
    fontSize: 16,
    flex: 1,  
    textAlign: 'center',  
    borderWidth: 2,  
    borderColor: '#f4f8fa',  
    paddingHorizontal: 10,  
    marginHorizontal: 5,  
    borderRadius: 7,  
    lineHeight: 30
  },
  icon_invitacion: {
    width: 35,
    height: 35,  
    borderWidth: 2,  
    borderColor: '#f4f8fa',  
    paddingHorizontal: 10,     
    borderRadius: 7 
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: -5,
    marginTop: 5
  },
  adestacadas: {
    backgroundColor: '#0d1114',
    height: 70,
    width: 70,
    marginTop: 5,
    marginLeft: 15,
    alignItems: 'center',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#d6dadd'
  },
  icon_nhis: {
    width: 25,
    height: 25,
    top: 22
  },
  htdestacadas: {
    color: '#d6dadd',
    fontFamily: 'Sans',
    fontSize: 14,
    top: 42
  },
  destacadas: {
    backgroundColor: '#0d1114',
    height: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10  
  },
  hdestacadas: {
    color: '#a2a1a1',
    fontFamily: 'Sans',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,  
    textAlign: 'left',  
    paddingHorizontal: 3,    
    lineHeight: 20
  },
  editar: {
    color: '#5761e2',
    fontFamily: 'Sans',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,  
    textAlign: 'right',  
    paddingHorizontal: 10,    
    lineHeight: 20
  },
  menufeed: {
    backgroundColor: '#0d1114',
    height: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', 
    paddingHorizontal: 7,
    top: 35
  },
  icon_menufeed: {
    width: 25,
    height: 25,
    flex: 1, 
    resizeMode: 'contain'
  },
  feed: {
    backgroundColor: '#2c2f38', 
    height: 200,
    width: '100%', 
    flexDirection: 'row', 
    top: 50,
    justifyContent: 'flex-start'
  },
  imagef: {
    backgroundColor: '#2c2f3',
    width: 128, 
    height: 200,
    borderColor: '#0d1114',
    borderWidth: 1
  },
  menuP:{
    backgroundColor: '#0d1114',
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: -128
  },
  icon_menuP: {
    width: 26,
    height: 26,
    resizeMode: 'contain'
  },
  icon_perfil2: {
    width: 28,
    height: 28,
    resizeMode: 'contain', 
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '##f4f8fa'
  }
});
