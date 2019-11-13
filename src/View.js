import React from 'react'
import Axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const View = ({ List, setList, post, getting }) => {

    const [modal, setModal] =React.useState(false);
    const [val,setVal]=React.useState("")
    const [postID,setPostId]=React.useState('0')
    const toggle = () => setModal(!modal);
    const deletePost = (id1) => {
        Axios.delete("http://localhost:8080/post/" + id1).then(result => {
            getting();
            if (result.status === 200 && result.settext === "OK") {

                setList([List.filter(i => i.id !== id1)])

                console.log("dfg")
            }
        })
    }
    const updateValue = (upd) => {
        Axios.put("http://localhost:8080/post/")
    }
    return (
        <div>
            <ul className="list-group" >
                {
                    List.map((i) => {
                        return (

                            <ul key={i.id}>
                                <li class="list-group-item">{i.title}</li>
                                <button className="float-right" onClick={() => deletePost(i.id)}>delete</button>
                                <button className="float-right" onClick={() =>{toggle();setPostId(post.id)}}>update</button>
                                <Button color="danger" onClick={toggle}>Post</Button>
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>UPDATE POST</ModalHeader>
                                    <ModalBody>
                                        <textarea type="text" rows="10" cols="50" onChange={(e)=>{setVal(e.target.value)}}></textarea>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={()=>{toggle();updateValue(postID)}}>SAVE</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                                <button className="float-right">Like</button>
                                <button className="float-right">Dislike</button>
                            </ul>
                        )
                    })}
            </ul>
        </div>
    )
}
export default View;