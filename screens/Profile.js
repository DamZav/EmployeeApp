import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';



const Profile = ()=>{

    const openDial=()=>{
        if(Platform.OS === "android"){
            Linking.openURL("tel:12345")
        }else{
            Linking.openURL("telprompt:12345")
        }
    }
    return(
        <View style={styles.root}>
            <LinearGradient
            colors={["#0015ff", "#9eced8"]}
            style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image
                style={{width:140, height:140, borderRadius:70, marginTop:-60}}
                source={{uri:"https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"}}
                />
            </View>
            <View style={{alignItems:"center", margin:7}}>
                <Title>Josefino Paez</Title>
                <Text style={styles.mytext}>Web Developer</Text>
            </View>
            <Card style={styles.mycard} onPress={()=>{
                Linking.openURL("mailto:miau@miau.com")
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>miau@miau.com</Text>
                </View>
            </Card>
            <Card style={styles.mycard} onPress={()=>openDial()}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>5607563022</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.mytext}>20 000 </Text>
                </View>
            </Card>
            <View style={{flexDirection:"row", justifyContent:"space-around", padding:5}}>
                <Button icon="account-edit" 
                mode="contained" 
                theme={theme}
                onPress={() => console.log('Pressed')}>
                    Edit
                </Button>
                <Button icon="delete" 
                mode="contained" 
                theme={theme}
                onPress={() => console.log('Pressed')}>
                    Fire Employee
                </Button>
            </View>
            
        </View>
    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}


const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})

export default Profile