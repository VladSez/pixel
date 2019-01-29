import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressList from './components/ProgressList'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.onRequestData()
  }
  render() {
    const { data, fetching, error } = this.props
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
