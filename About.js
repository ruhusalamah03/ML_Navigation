import React from 'react'
import {Text, View,Image, StyleSheet, Button } from 'react-native';
const About =({navigation}) => {
  return(
    <View>
        <Text style={styles.title}>Kontak 1</Text>
        <Image
            source={require('../assets/Sarah.png')}
            style={styles.image}/>
        <Text style={styles.text}>Sarah Syakira Rambe</Text>
        <Text style={styles.text}>Sukabumi</Text>
        <Text style={styles.telp}>085864503892</Text>

        <Text style={styles.title}>Kontak 2</Text>
        <Image
            source={require('../assets/Dinda.png')}
            style={styles.image}/>
        <Text style={styles.text}>Dinda Putri K</Text>
        <Text style={styles.text}>Sukabumi</Text>
        <Text style={styles.telp}>085864503892</Text>

        <Text style={styles.title}>Kontak 3</Text>
        <Image
            source={require('../assets/Nana.png')}
            style={styles.image}/>
        <Text style={styles.text}>Raina Rahmawati</Text>
        <Text style={styles.text}>Sukabumi</Text>
        <Text style={styles.telp}>085864503892</Text>

        <Text style={styles.title}>Kontak 4</Text>
        <Image
            source={require('../assets/Azizah.png')}
            style={styles.image}/>
        <Text style={styles.text}>Siti Nurazizah</Text>
        <Text style={styles.text}>Sukabumi</Text>
        <Text style={styles.telp}>085864503892</Text>
        
    <Button title ='Kembali'
    onPress={()=>navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    marginBottom:0,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    marginBottom:0,
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },

  telp: {
    fontSize:14,
    color:'#3498db',
    textAlign: 'center',
  }
});

export default About;