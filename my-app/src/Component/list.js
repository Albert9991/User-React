import React, { Component } from 'react';
import { API_URL } from '../config'
import Loading from './Loading/loading'
import Table from './Table/table'

class List extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            users: [],
            error: null
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch(`${API_URL}`)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                this.setState({
                    users: data,
                    loading: false
                })
            })
    }

    render(){
        const {loading,users,error} = this.state
        if(loading){
            return <Loading/>
        }
        return(
            <div>
                <Table 
                    users={users}
                />
            </div>
        )
    }
} 

export default List