import React from '../src'

const { Component, render } = React

interface Props {
  name: string
}

interface State {
  msg: string
}

class HelloMessage extends Component<Props, State> {
  constructor (...args: any) {
    super(...args)
    this.state = {
      msg: 'Hey'
    }
  }

  render () {
    return <div>{this.state.msg} {this.props.name}</div>
  }
}

render(
  <HelloMessage name='Nerv' />, document.body
)
