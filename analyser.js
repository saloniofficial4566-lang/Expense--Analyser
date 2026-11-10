// analyser.js - Expense Analyser
const fs = require('fs');
const _ = require('lodash');   // installed in Step 1 with: npm install lodash

// GIVEN: turns the text of the file into an array of objects
const parseExpenses = (text) => {
  return text.trim().split('\n').map((line) => {
    const parts = line.trim().split(',');
    return { category: parts[0], amount: Number(parts[1]) };
  });
};

// ---------- Step 3: read the file synchronously ----------
console.time('sync read');
const text = fs.readFileSync('expenses.txt', 'utf8');
console.timeEnd('sync read');

const expenses = parseExpenses(text);
console.log('First expense:', expenses[0]);

// ---------- Step 4: higher-order functions ----------
// 1. totalSpent - use reduce (initial value 0)
const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
console.log('Total spent:', totalSpent);

// 2. bigExpenses - use filter to keep expenses with amount > 500
const bigExpenses = expenses.filter(item => item.amount > 500);
console.log('Big expenses count:', bigExpenses.length);

// 3. withFee - use map to return NEW objects with flat Rs 50 delivery fee added
const withFee = expenses.map(item => ({ ...item, amount: item.amount + 50 }));
console.log('First item with fee:', withFee[0].amount, 'Original item:', expenses[0].amount);

// ---------- Step 5: totals per category ----------
const totalsByCategory = {};
for (const e of expenses) {
    if (totalsByCategory[e.category] === undefined) {
        totalsByCategory[e.category] = 0;
    }
    totalsByCategory[e.category] += e.amount;
}
console.log('Totals by category:', totalsByCategory);

// ---------- Step 6: switch and ternary ----------
function budgetNote(category) {
  switch (category) {
    case 'food':
      return 'Daily need';
    case 'travel':
      return 'Commute';
    case 'books':
      return 'Study';
    default:
      return 'Other';
  }
}

const categories = ['food', 'travel', 'books', 'entertainment'];
categories.forEach((category) => {
    const total = totalsByCategory[category] || 0;
    const note = budgetNote(category);
    const statusText = total > 1500 ? 'OVER 1500' : 'OK';
    console.log(`${category} (${note}): Rs ${total} - ${statusText}`);
});

// ---------- Step 7: closure ----------
function createBudgetTracker(limit) {
  let spent = 0;
  return function spend(amount) {
    spent += amount;
    if (spent <= limit) {
        return `Remaining: ${limit - spent}`;
    } else {
        return `Over budget by ${spent - limit}`;
    }
  };
}

const tracker = createBudgetTracker(1000);
console.log(tracker(300));
console.log(tracker(500));
console.log(tracker(400));

// ---------- Step 8: read the file asynchronously ----------
console.log('Async read started');
fs.readFile('expenses.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading asynchronously:', err);
        return;
    }
    console.log('Async read finished');
});

// Simulate work with 1,000,000 iterations loop
for (let i = 0; i < 1000000; i++) {
    // Ticking
}
console.log('Loop finished');

