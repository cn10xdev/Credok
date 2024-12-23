import {dashboard, expenses, transactions, trend, piggy, goal, investments, retirement} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Budgets",
        icon: piggy,
        link: "/dashboard",
    },
    {
        id: 6,
        title: "Goals",
        icon: goal,
        link: "/dashboard",
    },
    {
        id: 7,
        title: "Investments",
        icon: investments,
        link: "/dashboard",
    },
    {
        id: 8,
        title: "Retirement",
        icon: retirement,
        link: "/dashboard",
    },
]