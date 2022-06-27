// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-container">
      <p className="list-title">{title}</p>
      <p className="list-title">Rs {amount}</p>
      <p className="list-title">{type}</p>
      <button
        className="delete-btn"
        testid="delete"
        type="button"
        onClick={onDeleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
