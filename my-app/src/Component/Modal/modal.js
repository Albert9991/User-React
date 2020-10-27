import React,{Component, useReducer} from 'react';
import {API_URL} from '../../config';
import modalModules from './modal.module.css';
import Loading from '../Loading/loading';

class Modal extends Component {
    constructor(prop){
        console.log("Modal -> constructor -> prop", prop)
        super();
        this.state={
            loading:false,
            user:[],
            error:null,
            id:prop.match.params.id,
            history:prop.history
        }
    }

    componentDidMount(){
        this.setState({
            loading:true
        })
        fetch(API_URL(this.state.id))
        .then( resp =>{
            return resp.json()
        })
        .then(user =>{
            this.setState({
                user:user,
                loading:false
            })
        })
    }

    render(){
        const {loading,user,error,history} = this.state;
        if(loading){
            return(<Loading/>)
            
        }
        return(
            <div>
                <ul className={modalModules.cards}>
                    <li className={modalModules.user_card_item}>
                        <div className={modalModules.user_card}>
                            <div className={`${modalModules.user_card_pb} ${modalModules.card__image__fence} ` }></div>
                            <div className={modalModules.user_card_img}></div>
                            <div className={modalModules.user_card_cont}>
                                {
                                     user.map(({
                                        id,
                                        firstName,
                                        lastName,
                                        email,
                                        phone,
                                        address,
                                     }) => {
                                         return (
                                            <div>
                                                    <p className={modalModules.user_id}>FirstName : {firstName}</p>
                                                    <p className={modalModules.user_id}>LastName : {lastName} </p>
                                                    <p className={modalModules.user_id}>Id : {id}</p>
                                                    <p className={modalModules.user_id}>Email: {email}</p>
                                                    <p className={modalModules.user_id}>Phone : {phone}</p>
                                                    <p className={modalModules.user_id}>City : {address.city}</p>
                                                    <p className={modalModules.user_id}>Street Address : {address.streetAddress}</p>
                                                    <p className={modalModules.user_id}>State : {address.state} </p>
                                                </div>
                                         )
                                     })
                                }
                                                
                            </div>
                            <div className={modalModules.btn_row}><button onClick = {() => {history.push('/')}} >Back</button><button onClick = {() => {history.push('/')}} >Delete</button></div>
                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Modal