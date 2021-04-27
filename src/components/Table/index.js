import React from 'react'

function Table(props){

    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>D.O.B.</th>
                </tr>
            </thead>
            <tbody>
                {/* {props.list.map(user => 
                <tr style={{borderTop: "2px solid gray"}}>
                <td>
                    <img src={user.picture.thumbnail} alt="profile"/>
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.state}, {user.location.country}</td>
                </tr>
                )} */}
            </tbody>
        </table>
    )
}

export default 