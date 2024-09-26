import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Login() {
  return (
        <LinearGradient
            colors={['rgba(0,98,224,1)', 'rgba(25,175,255,1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={style.container}
            >
                <View style={style.subContainer}>
                    <View style={style.box}>
                        <Text style={style.title}>Login</Text>
                    <View>
                        <TextInput
                            style={style.inputText}
                            placeholder="useless placeholder"/>
                        <TextInput
                            style={style.inputText}
                            placeholder="useless placeholder"
                            secureTextEntry
                        />
                    </View>
                    </View>
                </View>
        </LinearGradient>
  );
}

const style = StyleSheet.create({
    container : {
        flex:1,
        alignContent:'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
    },
    subContainer: {
        padding: 18,
        width:'100%',
    },
    box:{
        backgroundColor: '#fff',
        height: 500,
        width: '100%',
        borderRadius:12,
    },
    title:{
        fontSize:32,
        textAlign:'cener',
        margin:'0 auto',
    },
    inputText:{
        width:'100%',
        borderWidth:1,
        borderColor:'black',
        borderStyle:'solid',
    },
});

export default Login;
