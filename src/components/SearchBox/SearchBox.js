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
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
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
          className={`${classesInput} search-box`}
          type="text"
          placeholder={placeholder}
          onChange={this.onChange}
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
