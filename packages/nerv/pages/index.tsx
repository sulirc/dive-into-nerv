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

    // setTimeout(() => {
    //   this.forceUpdate();
    // }, 1000)
  }

  render () {
    return <div>{this.state.msg} {this.props.name}</div>
  }
}

const vnode = <HelloMessage name='Nerv' />

// console.log('<HelloMessage>', HelloMessage.toString())
console.log('<vnode>', vnode)

const result = render(
  vnode, document.body, () => {
    console.log('Finish Rendering')
  }
)
