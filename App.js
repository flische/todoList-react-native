import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight} from 'react-native';


export default class App extends Component{
 constructor(props){
   super(props)
   this.state = {
     userInput: '',
     tasks: []
   }
 }

 handleAddTask = ()=>{
   if(this.state.userInput === ''){
     return;
   }
   this.setState((prevState) =>{
     return{
       tasks: prevState.tasks.concat(prevState.userInput),
       userInput: '',
     }
   })
 }
 handleDeleteButton =(i)=>{
   let newTasks = this.state.tasks
   newTasks.splice(i,1);
   // alert(`your still have tasks: ${newTasks}`)

   this.setState({
     tasks: newTasks
   })

 }
 render() {
   const outputNote = this.state.tasks.map((item, i)=>(
     <View key={i} style={styles.outputContainer}>
       <Text>{item}</Text>
       <Button title ="delete" onPress = {()=>this.handleDeleteButton(i)}/>
     </View>
   )
 )
   return (
     <View style={styles.container}>
       <View style={styles.inputContainer}>
           <TextInput
               placeholder = '> add your new task here'
               value = {this.state.userInput}
               onChangeText={(userInput)=>{
                 this.setState({userInput})
               }}
               style={styles.inputArea}
           />
           <TouchableHighlight  style={styles.button} onPress = {this.handleAddTask}  underlayColor ='gray'>
             <View style={styles.button}>
               <Text style={styles.buttonText}>+</Text>
             </View>
           </TouchableHighlight>
       </View>
      {outputNote}
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   // flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
   paddingTop: 40,
 },
 inputContainer:{
   width:'90%',
   // backgroundColor:'#4f52',
   flexDirection: 'row',
   justifyContent: "space-between",
   alignItems: 'center'
 },
 inputArea:{
   width:'80%',
   backgroundColor: 'lightgray',
   height: 60
 },
 button:{
   backgroundColor: 'pink',
   width: 60,
   height: 60,
   alignItems: 'center',
   justifyContent:'center',
   borderRadius: 100,

 },
 buttonText:{
   color:'white',
   fontSize: 40,
   alignItems: 'center',

 },
 outputContainer: {
   width:'90%',
   backgroundColor:'#4f52',
   flexDirection: 'row',
   justifyContent: "space-between",
   alignItems: 'center',
   margin:10
 }



});
