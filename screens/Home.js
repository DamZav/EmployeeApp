import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper'
import Profile from './Profile';


const Home = ({navigation})=>{
    const data = [
        {id:"1", name:'Dami', email:"dami@abc.com", salary: "50 000 DLS", phone: "123", position:'Dev Web', picture:'https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id:"2", name:'Ern', email:"ern@abc.com", salary: "40 000 DLS", phone: "456", position:'App', picture:'https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id:"3", name:'Pandai', email:"pandai@abc.com", salary: "30 000 DLS", phone: "789", position:'Finances', picture:'https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id:"4", name:'Alan', email:"alan@abc.com", salary: "20 000 DLS", phone: "258", position:'Chels', picture:'https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},    
    ]

    const renderList = ((item)=>{
          return(
            <Card style={styles.mycard} 
            onPress={()=>navigation.navigate("Profile", {item})}
            >
            <View style={styles.cardView}>
                <Image
                style={{width:60, height:60, borderRadius:30}}
                source={{uri:'https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                
                />
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.position}</Text>
                </View>
            </View>
            </Card>
          )
    })
    return (
        <View style={{flex:1}}>
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return renderList(item)
                }}
                keyExtractor={item=>item.id}
            />
            <FAB onPress={()=>navigation.navigate("Create")}
                    style={styles.fab}
                    small={false}
                    icon="plus"
                    theme={{colors:{accent:"#006aff"}}}
            />
        </View>   
    )
}

const styles =  StyleSheet.create({
    mycard:{
        margin:5,
        
    },
    cardView:{
        flexDirection: 'row',
        padding: 6
    },
    text:{
        fontSize:18,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})

export default Home