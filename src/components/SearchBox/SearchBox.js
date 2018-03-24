// @flow
import React, { Component } from 'react';
import styles from './SearchBox.scss';

type Props = {
  classesInput: string,
  placeholder: string,
  onChange: () => void
};

class SearchBox extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(evt) {
    if (this.props.onChange) {
      this.props.onChange({
        value: evt.target.value
      });
    }
  }

  render() {
    const { classesInput, placeholder } = this.props;
    return (
      <div className={styles.container}>
        <input
          className={classesInput}
          type="text"
          placeholder={placeholder}
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}

SearchBox.defaultProps = {
  classesInput: '',
  placeholder: '',
  onHandleTyping: () => {}
};

export default SearchBox;
