import React, { useState } from 'react';
import './ExpenseForm.css';
import api from './api';

// Define the Expense type
interface Expense {
    category: string;
    amount: string;
    date: string;
    description: string;
}

// Define the props type for ExpenseForm
interface ExpenseFormProps {
    setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ setExpenses }) => {
    const [expense, setExpense] = useState<Expense>({
        category: '',
        amount: '',
        date: '',
        description: ''
    });

    const [error, setError] = useState<string | null>(null); // State to store error messages

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validation logic
        if (!expense.category || !expense.amount || !expense.date) {
            setError('Please fill in all required fields.'); // Set error if fields are missing
            return;
        }

        if (parseFloat(expense.amount) <= 0) {
            setError('Amount should be a positive number.'); // Set error for invalid amount
            return;
        }

        setError(null); // Clear error if all validations pass

        try {
            const response = await api.post<Expense>('/api/expenses', expense);
            alert('Expense added successfully!');
            setExpenses(prevExpenses => [...prevExpenses, response.data]); // Update expenses
            setExpense({ category: '', amount: '', date: '', description: '' });  // Reset form
        } catch (error) {
            console.error('There was an error adding the expense!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className="error" role="alert">{error}</p>}  {/* Display error message */}
            
            <input
                type="text"
                placeholder="Category"
                value={expense.category}
                aria-invalid={!!error}
                onChange={(e) => setExpense({ ...expense, category: e.target.value })}
            />
            <input
                type="number"
                placeholder="Amount"
                value={expense.amount}
                aria-invalid={!!error}
                onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
            />
            <input
                type="date"
                value={expense.date}
                aria-invalid={!!error}
                onChange={(e) => setExpense({ ...expense, date: e.target.value })}
            />
            <textarea
                placeholder="Description (optional)"
                value={expense.description}
                onChange={(e) => setExpense({ ...expense, description: e.target.value })}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
