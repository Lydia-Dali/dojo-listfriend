import React, { Component } from 'react';

import ListStudent from './ListStudent';
import ListFriend from './ListFriend';
import Student from './Student';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //Cela crée le tableau de la liste d'etudiant studentsFriend
      studentsFriend: []
    }
  }
  addFriend(friend) {// fonction qui ajoute un etudiant a la liste d'amis
    // console.log(friend)
    let dataFriend = this.state.studentsFriend
    dataFriend.push(friend)//push renvoi un etudiant vers la liste
    this.setState({studentsFriend: dataFriend})
  }
  render() {// Le render lui permet d'afficher la liste sur la page
    console.log('FRIEND LIST', this.state.studentsFriend)// permet de voir si la console recoit l'information
    return ( // le return renvoi les 2 composants avec ce qu'il y a dedans
      <div>
        <ListStudent 
          addFriend={(student) => this.addFriend(student)}//c'est le composant qui va abriter la liste des étudiants 
        />
        <ul>
        <ListFriend listeFriends={this.state.studentsFriend} // c'est le composant qui rend la liste d'amis
        />
         </ul>
      </div>
    );
  }
}

export default Main ;
