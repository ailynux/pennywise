import React from 'react';

// Define the type for an expense
interface Expense {
    category: string;
    amount: string;
    date: string;
    description: string;
}

// Props type for the ExpenseList component
interface ExpenseListProps {
    expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
    return (
        <ul>
            {expenses.map((expense: Expense, index: number) => (
                <li key={index}>
                    {expense.category} - ${expense.amount} on {expense.date}
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;
