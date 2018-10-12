import React, { Component } from 'react';
import Student from './Student'
import studentList from '../data/Student.json';

class ListStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentsList: studentList//je récupére la liste qu'on attribu au state
    }
  }
  render() {
    console.log('LIST STUDENS', this.state)
    return (
      <ul>
        {//sur toute la liste d'étudiant on rend un composant étudiant pour chaque étudiant //map crée un objet pour chaque index de la liste
          this.state.studentsList.map((student) => {
            return (
              <li><Student name={student.name} student={student} addFriend={(friend) => this.props.addFriend(friend)}/></li>//li affiche l'étudiant et  
            )
          })
        }
      </ul>
    );
  }
}
console.log(Student);

export default ListStudent ;


