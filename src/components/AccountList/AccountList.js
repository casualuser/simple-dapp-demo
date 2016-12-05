
import React, { Component } from 'react'
import './AccountList.css'

class AccountList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Account</td>
            <td>META</td>
          </tr>
        </thead>
        <tbody>
          {this.props.accounts.map(this.renderAccount)}
        </tbody>
      </table>
    )
  }

  renderAccount({account, message}) {
    return (
      <tr key={account}>
        <td>{account}</td>
        <td>{message}</td>
      </tr>
    )
  }
}

export default AccountList;
