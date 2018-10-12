import React, { Component } from 'react';

class ListFriend extends Component {
  render() {
    return (
      <div>
        {
          this.props.listeFriends.map((friend)=>{
            return(<li>{friend.name}</li>)
         }
          )
        }
      </div>
    );
  }
}

export default ListFriend ;