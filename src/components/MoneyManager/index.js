import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionList: updatedTransactionList})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onTitleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amountInput: event.target.value})
  }

  onOptionChange = event => {
    this.setState({optionId: event.target.value})
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenseAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachTransaction.amount
      }
    })
    return expenseAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expenseAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expenseAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expenseAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpenses()

    return (
      <div className="money-manager">
        <div className="money-container">
          <h1 className="name-heading">Hi,Richard</h1>
          <p className="description">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expenseAmount={expenseAmount}
        />
        <div className="container">
          <form className="transaction-form" onSubmit={this.onAddTransaction}>
            <h1 className="transaction-heading">Add Transaction</h1>
            <label className="title" htmlFor="title">
              TITLE
            </label>
            <input
              className="title-text"
              type="text"
              id="title"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.onTitleChange}
            />
            <label className="title" htmlFor="amount">
              AMOUNT
            </label>
            <input
              className="title-text"
              type="text"
              id="amount"
              placeholder="AMOUNT"
              value={amountInput}
              onChange={this.onAmountChange}
            />
            <label className="title" htmlFor="select">
              TYPE
            </label>
            <select
              className="title-text"
              value={optionId}
              onChange={this.onOptionChange}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="transaction-heading">History</h1>
            <div>
              <ul className="history-lists-container">
                <li className="history-lists">
                  <p className="details">Title</p>
                  <p className="details">Amount</p>
                  <p className="details">Type</p>
                </li>
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
