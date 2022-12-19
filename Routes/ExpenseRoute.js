const path = require('path');
const User = require('../models/Expense');

const expenseController = require('../controllers/Expense');

const express = require('express');
const router = express.Router();

router.post('/', expenseController.postExpense)

router.get('/', expenseController.getExpense)

router.get('/get-user', expenseController.getExpenses);

router.post('/add-user', expenseController.postAddExpenses);

router.delete('/delete-user/:userId', expenseController.deleteExpense);


module.exports = router;