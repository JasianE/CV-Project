import React, {Component} from 'react'

class Basic extends Component{
    constructor(){
        super()
        this.state = {
            firstName : '',
            lastName : '',
            Email : '',
            Phone : '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <form>
                <input
                    type = 'text'
                    name = 'firstName'
                    value = {this.state.firstName}
                    placeholder = 'Input Firstname'
                    onChange = {this.handleChange}
                />
                <input
                    type = 'text'
                    name = 'lastName'
                    value = {this.state.lastName}
                    placeholder = 'Input Lastname'
                    onChange = {this.handleChange}
                />
                <input
                    type = 'text'
                    name = 'Email'
                    value = {this.state.Email}
                    placeholder = 'Input Email'
                    onChange = {this.handleChange}
                />
                <input
                    type = 'text'
                    name = 'Phone'
                    value = {this.state.Phone}
                    placeholder = 'Input Phone Number'
                    onChange = {this.handleChange}
                />
            </form>
        )
    }
}
export default Basic