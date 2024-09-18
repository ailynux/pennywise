import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
    const [expense, setExpense] = useState({
        category: '',
        amount: '',
        date: '',
        description: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/expenses', expense);
            alert('Expense added successfully!');
        } catch (error) {
            console.error('There was an error adding the expense!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Category"
                value={expense.category}
                onChange={(e) => setExpense({ ...expense, category: e.target.value })}
            />
            <input
                type="number"
                placeholder="Amount"
                value={expense.amount}
                onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
            />
            <input
                type="date"
                value={expense.date}
                onChange={(e) => setExpense({ ...expense, date: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={expense.description}
                onChange={(e) => setExpense({ ...expense, description: e.target.value })}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
