import React from 'react'
import {View,Text ,ImageBackground, StyleSheet, ScrollView,Image} from 'react-native'

export default class Home extends React.Component{

    constructor(){
        super()

        this.state={
            imagesdata:[
                {"imagesform":require('../../assets/sample1.jpeg'),"id":1},
                {"imagesform":require('../../assets/sample2.jpeg'),"id":2},
                {"imagesform":require('../../assets/sample3.jpeg'),"id":3},
                {"imagesform":require('../../assets/sample4.jpeg'),"id":4},
                {"imagesform":require('../../assets/sample1.jpeg'),"id":5},
            ]
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/sampleimg.jpg')} style={{width:'100%',height:'100%'}}>
                    <View>
                        <ScrollView horizontal={true}>
                        {
                            this.state.imagesdata.map((item,i) => {
                                return(
                                    <View key={item.id}  style={{marginTop:15}}>
                                        <Image source={item.imagesform} style={{marginLeft:15}}/>
                                    </View>
                                )
                            })
                        }
                        </ScrollView>
                        
                    </View>

                </ImageBackground>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        //flex:1
    }
})