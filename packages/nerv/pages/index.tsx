import React from '../src'

const { Component, render } = React

interface Props {
  name: string
}

class HelloMessage extends Component<Props> {
  render () {
    return <div>Hello {this.props.name}</div>
  }
}

render(
  <HelloMessage name='Nerv' />, document.body
)
