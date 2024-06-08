import React from "react";
import st from './MyPosts.module.css';
import Post from "../post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/state";

// let addPostActionCreator = () => {
//   return (
//   {type: 'ADD-POST'}
//   )
// }

// let updateNewPostTextActionCreator = (text)=> {
//   return (
//     {type:'UPDATE-NEW-POST-TEXT', newText: text}
//   )
// }

const MyPosts =(props)=> {

  let newPostElement = React.createRef();

  let postsItems =  props.posts.map(
    postItem =><Post id = {postItem.id} message ={postItem.message} likeCount = {postItem.likeCount} key = {postItem.id}/>);


let addMessage = () => {
  //props.dispatch({type:"ADD-POST"})
  let action = addPostActionCreator();
props.dispatch(action)
}

let onPostChange = () => {
  let text = newPostElement.current.value;
//props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText: text});

let action = updateNewPostTextActionCreator (text);
props.dispatch(action)
  console.log(text);
}

    return (
        <div className = {st.postsBlock} >
          <h3>My posts</h3>
          <div>
            <div>
               <textarea 
               ref = {newPostElement} 
              value = {props.newPostText}
              onChange = {onPostChange}
               />
            </div>
            <div>
               <button onClick = {addMessage} > 
               Add button
               </button>
            </div>     
          </div>
          <div>
          New posts.
        </div>
        <div className={st.posts}>
          {postsItems}
        </div>      
        </div>)
}

export default MyPosts;


 /* Пояснение к строкам 11, 13, 35:
  text -- это изменяемый параметр ( то, что 
  вводится в textarea ), поэтому при вызове 
  функции updateNewPostTextActionCreator внутри
  ф-и onPostChange мы передаем его в параметры
  этой созданной функции.
 )

 */

