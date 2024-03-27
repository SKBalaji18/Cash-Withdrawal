import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balanceAmt: 2000,
  }

  onChangeBalance = id => {
    switch (true) {
      case id === 1:
        this.setState(prevState => ({balanceAmt: prevState.balanceAmt - 50}))
        break
      case id === 2:
        this.setState(prevState => ({balanceAmt: prevState.balanceAmt - 100}))
        break
      case id === 3:
        this.setState(prevState => ({balanceAmt: prevState.balanceAmt - 200}))
        break
      case id === 4:
        this.setState(prevState => ({balanceAmt: prevState.balanceAmt - 500}))
        break
    }
  }

  render() {
    const {balanceAmt} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-card">
            <div className="profile-logo">
              <p className="logo-name">S</p>
            </div>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-bal">Your Balance</p>
            <div className="balance-stats-container">
              <p className="balance-amt">{balanceAmt}</p>
              <p className="balance-amt-in">in Rupees</p>
            </div>
          </div>
          <div>
            <p className="widthdraw-head">Withdraw</p>
            <p className="widthdraw-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominations={eachItem}
                  key={eachItem.id}
                  onChangeBalance={this.onChangeBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
