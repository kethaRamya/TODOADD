import React from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
export default class TODOApp extends React.Component{
   constructor(){
   super();
   this.state={
        text:[],
       AddItems:'',
   }
}
   AddItemsTODO = () => {
    let adddata = this.state.text.split(',')
   this.setState({AddItems:adddata},() =>{console.log("xcbfgbv",this.state.AddItems)})
}

    RemoveItem = (items) => {
         const deleteData = this.state.AddItems.filter(item => item !== items)
         this.setState({AddItems:deleteData}) 

    }
   render(){
   return(
   <View style={styles.todo_view}>
       <View style={{flexDirection:"row"}}>
       <TextInput
        style={styles.input_todo}
        placeholder="Enter Text"
        onChangeText={text => this.setState({text})}
        value={this.state.text}
      />
       <TouchableOpacity onPress={this.AddItemsTODO} style={{backgroundColor:'blue',}}>
           <Text style={{color:'white',fontSize:20,padding:5}}>Add </Text>
       </TouchableOpacity>
       
       </View>
    {this.state.AddItems ?
            <View>
               {this.state.AddItems.map((items,index) => {
                   return(
                      
            <View key={index} style={styles.item_todo}>
            <Text>{items}</Text>
            <TouchableOpacity onPress={() => {this.RemoveItem(items)}}><Text style={{}} >X</Text></TouchableOpacity>
               </View>
             
               )})}
            </View>
        : null}
        
</View>
)
}

}

const styles = StyleSheet.create({
    todo_view:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,width:"100%"
    },
    input_todo:{
        height: 40,
        borderWidth:1,
        borderColor:"#ddd",
        width:'50%'
    },
    item_todo:{
        flexDirection:"row",
        justifyContent:'space-between',
        backgroundColor:"white",
        marginTop:15,
        width:250,
        padding:10
    }

})