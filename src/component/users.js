import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../store/actions/usersAction'

class users extends Component {
    componentDidMount() {
        this.props.getUsers()

    }
    render() {
        const { users } = this.props.users
        console.log(users)


        return (
            <div>
                {users.map(u =>
                    <React.Fragment key={u.id}>
                        <h1 >Name: {u.name}</h1>                        
                        <h3 >Username: {u.username}</h3>
                        <h3>Email: {u.email}</h3>
                        <h5>Address: {u.address.street}, {u.address.suite} </h5>
                        
                        <h5>{u.address.city}</h5>
                        <h5>{u.address.zipcode}</h5>
                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(users)
