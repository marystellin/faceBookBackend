import React from 'react'
import View from './View'
import Axios from 'axios';

const App = () => {
    const [post, setPost] = React.useState("");
    const [list, setList] = React.useState([]);
    React.useEffect(()=>{
        getting();
    }, [])
    const getting = () => {
        Axios.get("http://localhost:8080/post").then(result => {
            setList(result.data)
        });
    }
    const putPost=()=>{
        console.log(post)
        Axios.post("http://localhost:8080/post",{title:post}).then(success=>{
            getting()
            setList([...list,success.data])
            setPost(" ")
        }).catch(error=>{
            console.log(error)
        })
    }
   
    
    return (
        <div>
            <h2 style={{color:"blue"}}><center>FaceBook Clone</center></h2>
{"Post:"}   <textarea rows="5" cols="150" onChange={e=>setPost(e.target.value)} placeholder="write something....." value={post}></textarea>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>putPost()}>Post</button>
            <View List={list} post={post} setList={setList} getting={getting}/>
        </div>
    )
}
export default App;