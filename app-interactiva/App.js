  import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
  import{useState} from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
  import { faHouse, faNewspaper, faVideo, faCamera, faPlay, faRightFromBracket,faMoon, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
  import { Button, CheckBox, Input } from '@rneui/base';

  export default function App() {
    const items=[
      {id:'checked1'},
      {id:'checked2'},
    ];

    const [checkedItems,setCheckedItems]=useState({
      checked1:false,
      checked2:false,
    });

    const handleCheck = (item) => {
      setCheckedItems((prevState)=>({
        ...prevState,
        [item]:!prevState[item]
      }));
    };

    const[commentText,setCommentText]=useState('');
    const[comments,setComments]=useState([]);

    const handleAddComment = () => {
      setComments((prevComments) => [
        ...prevComments,
        { id: comments.length + 1, text: commentText },
      ]);
      setCommentText('');
    };

    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode = () =>{
      setDarkMode((prevState) => !prevState);
    }

    const backgroundStyle = darkMode ? { backgroundColor: '#534f4f' } : { backgroundColor: '#F8F8FF' };
    const textColor = darkMode ? { color: '#F8F8FF' } : { color: '#534f4f' };
    const iconColor = darkMode ? '#82ccdd' : '#1e3799'; 
    const borderColorDark = darkMode ? 'rgba(130, 204, 221, 0.5)' : 'rgba(30, 55, 153, 0.5)';


    return (
      <View style={[styles.container, backgroundStyle]}>

        <View style={[styles.options,{borderBottomColor: borderColorDark}]}>
          <Button
              icon={<FontAwesomeIcon icon={faRightFromBracket} size={30} color={iconColor}/>}
              buttonStyle={[styles.button]}
          />
          <Button
              icon={<FontAwesomeIcon icon={faMoon} size={30} color={iconColor}/>}
              buttonStyle={styles.button}
              onPress={handleDarkMode}
          />
        </View>
      
        <View style={styles.body}>

          <Text style={[styles.title,textColor]}> Taller Intregacion FIF 2025-1</Text>

          <View style={styles.live}>
            <Image
              source={require('./assets/Taller.jpg')}
              style={styles.live_video}
            />
            <View style={styles.overlay}>
              <FontAwesomeIcon icon={faPlay} size={60} color={iconColor}/>
            </View>
          </View>

          <View style={styles.reactions}>
            {items.map((item)=>(
              <CheckBox
                key={item.id}
                title={item.title}
                containerStyle={{
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 5,
                }}
                checked={checkedItems[item.id]}
                onPress={()=>handleCheck(item.id)}
                checkedIcon={item.id === 'checked1' ? "heart" : "bookmark"}
                uncheckedIcon={item.id === 'checked1' ? "heart-o" : "bookmark-o"} 
                iconType="font-awesome"
                checkedColor={iconColor}
                uncheckedColor={iconColor}
                size={25}
            />
            ))}
        
            <Button
              icon={<FontAwesomeIcon icon={faShareFromSquare} size={20} color={iconColor}/>}
              buttonStyle={styles.button}
            />
          </View>

          <View style={[styles.contentComments,{borderColor: borderColorDark}]}>
            <Text style={[styles.titleComents,textColor]}> Comentarios</Text>
            <ScrollView style={styles.comments}>

              <View style={[styles.bodyComment,{borderBottomColor: borderColorDark}]}>
                <View style={styles.infComment}>
                  <Image
                    source={require('./assets/Foto-perfil.jpg')}
                    style={styles.icon_perfil}
                  />
                  <Text style={[styles.user,textColor]}>Usuario1</Text>
                </View>
                <View style={[styles.textComment,textColor]}>
                  <Text style={[styles.commentwri,textColor]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
                </View>
              </View>

              {comments.map((comment) => (
              <View style={[styles.bodyComment,{borderBottomColor: borderColorDark}]}>
              <View style={styles.infComment}>
                <Image
                  source={require('./assets/Foto-perfil.jpg')}
                  style={styles.icon_perfil}
                />
                <Text style={[styles.user,textColor]}>Usuario1</Text>
              </View>
              <View style={[styles.textComment,textColor]}>
                <Text style={[styles.commentwri,textColor]}>{comment.text}</Text>
              </View>
            </View>
              ))}
            </ScrollView>

            <View style={styles.writeComment}>
              <Image
                source={require('./assets/Foto-perfil.jpg')}
                style={styles.icon_perfil2}
              />
              <Input
                placeholder="Agregar un comentario..."
                inputContainerStyle={{ borderBottomWidth: 0 }}
                style={styles.comment}
                value={commentText}
                onChangeText={(text) => setCommentText(text)}
                onSubmitEditing={handleAddComment}
              />
            </View>
          </View>
        </View>

        <View style={[styles.navbar,{borderTopColor: borderColorDark}]}>
          <FontAwesomeIcon icon={faHouse} size={22} color={iconColor}/>
          <FontAwesomeIcon icon={faNewspaper} size={22} color={iconColor}/>
          <FontAwesomeIcon icon={faVideo}  size={22} color={iconColor}/>
          <FontAwesomeIcon icon={faCamera} size={22} color={iconColor}/>
        </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F8F8FF'
    },
    options: {
      height: '7%',
      width: '100%',
      paddingTop: 19,
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 4,
      
    },
    body: {
      flex: 1, 
      height: '85%',
      width: '100%',
    },
    title: {
      height:'6%',
      width:'100%',
      textAlign: 'center',
      paddingTop: 8,
      fontSize: 22,
      fontWeight: 'bold',
    },
    live: {
      width: '100%', 
      height: '29%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    live_video: {
      width: '90%', 
      height: '100%',
      borderRadius: 20,
      
    },
    overlay: {
      position: 'absolute',
      width: '90%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    reactions: {
      width: '100%', 
      height: '7%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      
    },
    button:{
      backgroundColor: 'transparent',
    },
    contentComments:{
      height: '58%',
      macHeight: '58%',
      width:'90%',
      marginLeft: '5%',
      marginBottom: '4%',
      marginRight: '5%',
      borderRadius: 20,
      borderWidth: 3,
    
    },
    comments: {
      width: '100%', 
      height: '80%'
    },
    titleComents: {
      width: '100%', 
      height: '7%', 
      textAlign: 'left', 
      paddingTop: 5, 
      fontSize: 18,
      paddingLeft: 10, 
      fontWeight: 'bold'
    },
    bodyComment: {
      width: '100%', 
      height: 100, 
      borderBottomWidth: 1,
      marginTop: 10,
      borderRadius: 20,
    },
    infComment: {
      width: '100%', 
      height: '40%', 
      flexDirection: 'row',
      justifyContent: 'left',
      alignItems: 'center',
      marginLeft: 20,
      paddingTop: 10
    },
    user: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 20
    },
    textComment: {
      width: '90%', 
      height: '60%', 
      marginLeft: 20, 
      paddingTop: 10,
      justifyContent: 'justify',
    },
    icon_perfil: {
      width: 40,
      height: 40,
      borderRadius: 20
    },
    writeComment:{
      width: '90%', 
      height: '13%', 
      flexDirection: 'row', 
      justifyContent: 'space-around',
      padding: 4,
    },
    comment:{
      width: '90%', 
      height: 30, 
      backgroundColor: 'white', 
      borderRadius: 13
    },
    icon_perfil2: {
        width:45,
        height:45,
        borderRadius: 47
    },
    navbar: {
      width: '100%', 
      height: '8%', 
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 10,
      borderTopWidth: 4,
     
    },
  });