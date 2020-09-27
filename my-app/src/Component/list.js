import React, { Component } from 'react';
import { API_URL } from '../config'
import Loading from './Loading/loading'
import Pagination from './Pagination/pagination';
import Table from './Table/table'

class List extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            users: [],
            error: null,
            page:1,
            totalPages: 50,
            perPage: 20,
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

    handlePaginationClick(direction) {
        let nextPage = this.state.page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;
    }

    render(){
        const {loading,users,error,page,totalPages} = this.state
        if(loading){
            return <Loading/>
        }
        return(
            <div>
                <Table 
                    users={users}
                />
                <Pagination 
                page = {page}
                totalPages = {totalPages}/>
            </div>
        )
    }
} 

export default List