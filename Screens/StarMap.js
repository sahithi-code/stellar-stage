import React,{Component} from 'react'
import{Text,
          View,
          TextInput,
          StyleSheet,
          Platform,
          StatusBar,
          SafeAreaView,
          ImageBackground,
         
       } from 'react-native'

import {WebView} from 'react-native-webview';

export default class StarMapScreen extends Component{

  constructor(){
    super()
    this.state={
      longitude:'',
      latitude:''
    }
  }

  render(){
     const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
       
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={{flex:0.3,marginTop:20,alignItems:'center'}}>
        <Text style={styles.titleText}>Star Map</Text>

        <TextInput
         style={styles.inputStyle}
         placeholder='enter latitude'
         placeholderTextColor='white'
         onChangeText={(text)=>{
           this.setState({
             latitude:text
           })
         }}
        />
       
        <TextInput
         style={styles.inputStyle}
         placeholder='enter longitude'
         placeholderTextColor='white'
         onChangeText={(text)=>{
           this.setState({
             longitude:text
           })
         }}
        />
        
       
      </View>
        <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom: 20, }}
                />
      </View>
    )
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#000C17'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "pink",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'black',
        width: 200
    }
})