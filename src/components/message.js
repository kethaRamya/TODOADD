import React from 'react'
import {View,Text,AsyncStorage, TouchableOpacity, ScrollView,StyleSheet} from 'react-native'
import {ReadData} from '../data.json'

export default class MessageData extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    async componentDidMount(){
            console.log("dtat res",ReadData)
            await AsyncStorage.setItem("message",JSON.stringify(ReadData))
        
    }

    handleButton = async() => {
       
       let values= await AsyncStorage.getItem("message")
       this.setState({
        data:JSON.parse(values)
    },() => {console.log("values data1",this.state.data)})

    //    for(let[key,value] of Object.entries(JSON.parse(values))){
       

    //    } 
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.handleButton} style={styles.content}>
                <Text style={{color:"#fff"}}>Save</Text>
                </TouchableOpacity>
                <ScrollView>
                {this.state.data.map((items,i) => {
                    return(
                        <View style={{marginTop:15,marginLeft:10}}>
                            <Text>{items.title}</Text>
                        </View>
                    )
                })}
                </ScrollView>       
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        width:100,
        padding:10,
        marginLeft:20
        
        
    }
})