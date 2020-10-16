import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import styles from './UserCard.module.css';

export default class UserCard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isSelected: false,
      };
    }

    handleDelete = () => {
      this.props.filterItems(this.props.name);
    };

    handleSelect = () => {
      this.setState({
        isSelected: !this.state.isSelected,
      });
    };

  render() {
    const {...user} = this.props;
    const { isSelected } = this.state;

      return (
        <div className={isSelected ? styles.userCardChecked : styles.userCard} onClick={this.handleSelect}>
        <img src ={user.name.profilePicture} className={styles.profileImg} alt="profile"/>
        <div>
        <p>{`${user.name.firstName} ${user.name.lastName}`}</p>
        <p className={styles.userTagline}>{user.name.tagline}</p>
        </div>
        <Icon path={mdiDelete} className={styles.binIcon} onClick={this.handleDelete} />
      </div>
    )
  }
}
