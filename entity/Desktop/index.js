import React from 'react'

export default props => (
  <div>
    <style>{``}</style>
    <SPA {...props.url.query} />
  </div>
)

class SPA extends React.Component {
  // static async getInitialProps({ query: { authorize } }) {
  //   return { authorize: authorize }
  // }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <img src={`/static/desktop.jpg`} />
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}
}
