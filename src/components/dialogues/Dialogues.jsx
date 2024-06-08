import React from 'react';
import st from './Dialogues.module.css';
import DialogueItem from './dialogueItem/DialogueItem';
import Message from './message/Message';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/state';

// const DialoguesArray = [
//     {id:1, name:'Pavel'},
//     {id:2, name:'Andrey'},
//     {id:3, name:'Nicolay'},
//     {id:4, name:'Alina'},
//     {id:5, name:'Maria'},
//     {id:6, name:'Victor'}
// ]

// const MessagesArray = [
//     {id:1, message:'Hi'},
//     {id:2, message:'How are you ?'},
//     {id:3, message:'I love It-kamasutra'},
//     {id:4, message:'That is a great course'},
// ]



const Dialogues =(props) => {
//debugger;
    let dialoguesItems = props.dialogues.map( 
        dialogueItem => 
        <DialogueItem name = {dialogueItem.name} id = {dialogueItem.id} key = {dialogueItem.id}/>)
    ////////////////////


    let messagesItems = props.messages.map( 
        messageItem => 
        <Message theMessage = {messageItem.message} id = {messageItem.id} key = {messageItem.id}/>
    )

        let newMessageElement = React.createRef();

        let addMessage = ()=> {
     let action = addMessageActionCreator();
     props.dispatch(action);
        }
     
        let onMessageChange = ()=> {
     let text = newMessageElement.current.value;
     let action = updateMessageActionCreator(text);
     props.dispatch(action)
        }


    return(<div className={st.dialogues}>
        <div className={st.dialoguesItems}>      
            {dialoguesItems} 
        </div>
        <div>
        <div className={st.messagesItems}>
            {messagesItems};
        </div>
        <div>
            <textarea 
               ref = {newMessageElement} 
              value = {props.newMessageText}
              onChange = {onMessageChange}
               />
            </div>
            <div>
               <button onClick = {addMessage} > 
               Add button
               </button>
            </div> 
        </div>
        
    </div>
    )
}

export default Dialogues;

 
 