import React,{Component} from 'react';
import {Text,
       View,
       TextInput,
       StyleSheet,
       SafeAreaView,
       TouchableOpacity,
       Platform,
       StatusBar,
       ImageBackground,
       Image,
} from 'react-native';


export default class Home extends Component{
   render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require("../assets/stars.gif")} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                
                <Image source={require("../assets/main-icon.png")} style={{ width: 150, height: 150, }}></Image>
                 <Text style={styles.titleText}>Stellar App</Text>
                    
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCraft")
                    }>
                        <Text style={styles.routeText}>Spacecrafts</Text>
                        <Image source={require("../assets/space_crafts.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  droidSafeArea:{
    marginTop:Platform.OS === "android" ? StatusBar.CurrentHeight:0

  },
  titleBar:{
    flex:0.15,
    justifyContent:'center',
    alignItems:'center',
    
  },
  routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:160,
    borderRadius:15,
    backgroundColor:'purple',
    
  },
  titleText:{
    fontSize:35,
    fontWeight:'bold',
    color:'white',
  },
routeText:{
  fontSize:30,
  fontWeight:'bold',
  color:"yellow",
  marginTop:20,
  paddingLeft:30
},
backgroundImage:{
  flex:1,
  resizeMode:'cover'
},
  routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 80,
        width: 80,
        resizeMode: "contain"
    }

})