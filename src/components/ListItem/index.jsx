import React, { Component } from 'react';
/* import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js'; */
import styles from './ListItem.module.css';



export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isSelected: false,
        };
      }

      handleSelect = () => {
        this.setState({
          isSelected: !this.state.isSelected,
        });
      };

    render() {
        const { isSelected } = this.state;
        return (
            <div className={isSelected ? styles.listItemChecked: styles.listItem} onClick={this.handleSelect}>
                <img src ={'https://images.generated.photos/WzFYAL6Ope8FCYOKB0vb5xLvHefiTVR-3GUKl3Hsm18/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA0MTI4NDMu/cG5n.png'} className={styles.profileImg} alt="profile"/>
                <article>
                <p className={styles.userInfo}>Full Name here</p>
                <p className={styles.userTagline}>tag line here</p>
                </article>
                <img src ={'https://images.generated.photos/WzFYAL6Ope8FCYOKB0vb5xLvHefiTVR-3GUKl3Hsm18/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA0MTI4NDMu/cG5n.png'} className={styles.profileImg} alt="profile"/>
            </div>
        )
    }
}
