import React from 'react'
import TableModules from './table.module.css'
import { withRouter } from 'react-router-dom';

const Table = ({users,history}) =>{
    let i = 0;
    return (
    <section>
        <div>
            <table cellPadding="0" cellSpacing="0" border="0">
                <thead className ={TableModules.tbl_header}>
                    <tr>
                        <th>Id '↑'</th>
                        <th>First Name '↑'</th>
                        <th>Last Name '↑'</th>
                        <th>Email '↓'</th>
                        <th>Phone '↓'</th>
                        <th>City '↓'</th>
                        <th>Street Address '↑'</th>
                        <th>State '↑'</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div className ={TableModules.tbl_content}>
            <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                    {
                        users.map(({
                            id,
                            firstName,
                            lastName,
                            email,
                            phone,
                            address,
                        } )=> {
                            return(
                                <tr key={i++} onClick = {() => {history.push(`/users/${id}`)}}>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{address.city}</td>
                                <td>{address.streetAddress}</td>
                                <td>{address.state}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </section>
    )
}

export default withRouter (Table)