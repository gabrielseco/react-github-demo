// @flow
import React from 'react';

type State = {
  username: string,
  isLoading: boolean
};

type Props = {
  render: Function
};

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ value }) {
    this.setState({
      username: value,
      isLoading: true
    });
  }

  render() {
    return this.props.render({
      username: this.state.username,
      isLoading: this.state.isLoading,
      onChange: this.onChange
    });
  }
}

export default App;
