import React from 'react'

export default class SPA extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <img {...{
      src: '/static/desktop.jpg'
    }} />
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}
}
