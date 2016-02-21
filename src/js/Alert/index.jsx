import styles from './Alert.scss';
import React from 'react';
import content from '../content';

export class Alert extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="alerts">
        {content.banners.map(link =>
          <div className={link.type}>
            <p dangerouslySetInnerHTML={{__html: link.text}}></p>
          </div>
        )}
      </div>
    );
  }
}
