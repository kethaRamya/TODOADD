import React from 'react'

import {View,Text,Image, StyleSheet,ActivityIndicator} from 'react-native'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';

export default class EmployeeData extends React.Component{

    constructor(){
        super();
        this.state = {
            data:[],
            loader:true
        }
    }

    componentDidMount(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then((response) => {
            //console.log(response.data,"dummay data")
            this.setState({
                data:response.data.data,
                loader:false
            },() => {
                console.log("user data",this.state.loader)
            })
        })
        .catch((error) => {
            console.log("error message",error.message)
        })
    }
    render(){
        return(
            <View>
                {this.state.loader == true && this.state.data.length >= 0 ? 
                 <ActivityIndicator size="large" color="blue" style={{marginTop:20}}/>  :    
          
                <ScrollView>
                {this.state.data.map((items,i) => {
                    return(
                        <View style={styles.container}>
                        <Image source={require('../../assets/Image.png')} style={{width:40,height:40,borderRadius:20,}}/>
                        <View style={{marginLeft:20}}>
                    <Text>Name:{items.employee_name}</Text>
                    <Text>Salary:{items.employee_salary}</Text>
                    <Text>age:{items.employee_age}</Text>
                        </View>
                    </View>

                    )
                })}
                </ScrollView>
                  }
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flexDirection:'row',
        //justifyContent:'space-between',
        borderBottomColor:'#ddd',
        borderRadius:10,
        marginTop:20,
        padding:5
    }
})