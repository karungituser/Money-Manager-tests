// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenseAmount} = props

  return (
    <div className="balance-container">
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-image"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="balance-details" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-image"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="balance-details" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-image"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="balance-details" testid="expensesAmount">
            Rs {expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
