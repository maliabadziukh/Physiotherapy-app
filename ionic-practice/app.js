const reasonInput = document.getElementById('input-reason');
const amountInput = document.getElementById('input-amount');
const clearBtn = document.getElementById('btn-clear');
const addBtn = document.getElementById('btn-add');
const expenses = document.getElementById('expenses-list');
const totalExpensesOutput = document.getElementById('total-expenses');

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

clearBtn.addEventListener('click', clear);

addBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $' + enteredAmount;
  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  expenses.appendChild(newItem);
  clear();
});
