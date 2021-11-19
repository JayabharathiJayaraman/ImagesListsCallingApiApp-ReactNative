import React from "react";
import { SafeAreaView, StyleSheet,Text,View,Image} from "react-native";

  export const MainScreen:React.FC = () => {

    return (
<SafeAreaView style={styles.container}>
<View style={styles.imageContainer}>
    <Image style={styles.image}
    source = {require("../..assets/cat.png")}>

    </Image>
</View>
<View style = {styles.textContainer}>
    <Text>Hello</Text>
</View>

</SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer:{
        flex:1,
        backgroundColor:'pink',
        margin:20,


    },
    image:{
width:'150',height:'150'
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
  backgroundColor:'orange',
    }
  });
  