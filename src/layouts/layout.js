import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { getUserInfo, addUserInfo } from '../redux/actions/users'

// import '../static/sass/common.scss'

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentWillMount() {
    const { getUserInfo } = this.props

    getUserInfo()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, { getUserInfo })(Layout)
