// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominations,onChangeBalance} = props
  const {id, value} = denominations
  const onDenomination = () =>{
    onChangeBalance(id)
  }
  return (
    <li>
      <button onClick={onDenomination}>{value}</button>
    </li>
  )
}

export default DenominationItem
