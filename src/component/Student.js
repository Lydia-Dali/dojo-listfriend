import React, { Component } from 'react'

export default class Student extends Component {
    
    render() {
        return (//h3 et this.props.name affiche la clé name correspondant à un étudiant dans le fichier json
        <div>
            <h3>{this.props.name}</h3> 
            <button onClick={() => this.props.addFriend(this.props.student)}> + Add Friend</button>
        </div>
        )
  }
}
