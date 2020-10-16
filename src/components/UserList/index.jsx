import React, { Component } from 'react';
import UserCard from './../UserCard';
import users from '../../users.json';


export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: users,
        };
      }
      
      filterItems = (filteredItem) => {
        this.setState({
          list: this.state.list.filter(
            (currentItem) => currentItem !== filteredItem
          ),
        });
      };

      renderListItems = () => {
        const { list } = this.state;
        return list.map((item) => (
            <UserCard key={item.id} filterItems={this.filterItems} name={item} />
        ));
      };

    render() {
        return (
            <div>
                {this.renderListItems()}
            </div>
        )
    }
}
