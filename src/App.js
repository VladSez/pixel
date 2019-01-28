import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressList from './components/ProgressList'
import './App.css'

class App extends Component {
  state = {
    data: null,
  }
  async componentDidMount() {
    // fetch('http://localhost:3001/progres')
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ data }))
    //   .catch((err) => alert(err))
    // const response = await fetch('http://localhost:3001/progress') // get users list
    // const status = response.statusText
    // if (status === 'OK') {
    //   const data = await response.json() // parse JSON
    //   this.setState({ data })
    // } else {
    //   this.setState({ status })
    // }
    this.props.onRequestData()
  }
  render() {
    const { data, fetching, error } = this.props
    console.log(data)
    if (fetching) {
      return 'loading...'
    }
    if (error) {
      return 'error'
    }
    if (!data) {
      return 'smth went wrong'
    }
    if (data.length > 0) {
      return (
        <div className="App">
          <ProgressList progress={data} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    data: state.data,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestData: () => dispatch({ type: 'API_CALL_REQUEST' }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
