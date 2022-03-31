import React from 'react';
import { Card,FAB } from 'react-native-paper';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
const url="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80";
const data=[
    {
        id:1,name:'sang',postion:"Mobile developer"
    },
    {
        id:2,name:'huy',postion:"Mobile developer"
    },
    {
        id:3,name:'hoang',postion:"Mobile developer"
    }
]

const Home =() =>{
    const renderlist=data.map((item)=>{
        return(
                <Card style={styles.mycard}>
                    <View style={styles.cardview}>
                    <Image 
                    style={{width:60,height:60,borderRadius:50}}
                    source={{uri:url}} />
                    <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={{marginLeft:10}}>{item.postion}</Text>
                    </View>
                    </View>
                </Card>
        )
        
    });

    const renderFlatlist=((item)=>{
        return (
            <Card style={styles.mycard} key={item.id}>
                <View style={styles.cardview}>
                <Image 
                style={{width:60,height:60,borderRadius:50}}
                source={{uri:url}} />
                <View style={{marginLeft:10}}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={{marginLeft:10}}>{item.postion}</Text>
                </View>
                </View>
            </Card>
    )
    })


    return(
        <View style={{backgroundColor:"#696969",height:"100%"}}>          
            <FlatList data={data} 
                
                renderItem={({item})=>{
                   return renderFlatlist(item)
                }}
                keyExtractor={item=>`${item.id}`}
                />
            <FAB style={styles.fab} icon="plus" small onPress={() => console.log('Pressed')}/>

        </View>
    )
}

const styles=StyleSheet.create({
    mycard:{
        margin:5,
        padding: 5
    },
    text:{
        fontSize:22,
        marginLeft:10
    },
    cardview:{
        flexDirection:"row",
        padding:6
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      }
})

export default Home;