import React from 'react'
import {Text,View, Image, StyleSheet,Button} from 'react-native';

const Home=({navigation}) =>{
  return(
    <View>
        <Text style={styles.title}>Aplikasi Daftar Kontak Teman</Text>
        <Image
            source={require('../assets/Sarah.png')}
            style={styles.image}/>
        <Text style={styles.text}>Sarah Syakira Rambe</Text>

        <Image
            source={require('../assets/Dinda.png')}
            style={styles.image}/>
        <Text style={styles.text}>Dinda Putri K</Text>

        <Image
            source={require('../assets/Nana.png')}
            style={styles.image}/>
        <Text style={styles.text}>Raina Rahmawati</Text>

        <Image
            source={require('../assets/Azizah.png')}
            style={styles.image}/>
        <Text style={styles.text}>Siti Nurazizah</Text>

    <Button title ='Detal Informasi'
    onPress={()=>navigation.navigate('About')} />

    
    </View>

    
  )
};
// export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    marginBottom:0,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    margin:15,
    width:50,
    height:50
  },
   text: {
    fontSize: 12,
    marginBottom: 0,
    textAlign: 'left',
  },

  });
  export default Home;