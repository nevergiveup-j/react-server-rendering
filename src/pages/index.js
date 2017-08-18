import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  render() {
    const { user } = this.props
    const { isLogin, userInfo } = user
    console.log(userInfo)
    return (
      <div>
        <div>
          User Name: {userInfo.userName}
        </div> 
        home content333
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(Index)
