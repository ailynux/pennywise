# PennyWise 💸  ![.NET Core](https://img.shields.io/badge/.NET%208-68217A?logo=.net&logoColor=white&style=flat) ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Azure](https://img.shields.io/badge/Azure-0078D4?logo=microsoft-azure&logoColor=white&style=flat)

**PennyWise** is a powerful and intuitive full-stack expense tracker app designed to help users stay on top of their finances. Built using **C#**, **.NET 8**, **React**, and **Azure**, PennyWise makes it easy to add, categorize, and track expenses, with insightful visualizations to give users a clear picture of their spending habits. 📊

---
> Built for those who want an efficient way to keep their finances in check while leveraging the latest tech stack.

---

🔗 [Check out my GitHub](https://github.com/ailynux) | 💼 [LinkedIn](https://www.linkedin.com/in/ailyndiaz01)
## Features 🚀

- **Add and Categorize Expenses**: Users can log their expenses by specifying categories like `Food`, `Rent`, `Utilities`, etc.
- **Track Expenses**: View a list of expenses with dates, descriptions, and amounts.
- **Data Visualizations**: Get insightful data visualizations of your spending trends over time.
- **User Authentication**: Securely login and manage your personal expense data.
- **Cloud Deployment**: Fully deployed on **Azure** for reliable performance and scalability.

---

## Tech Stack 🛠️

- **Back-End**: ![C#](https://img.shields.io/badge/C%23-239120?logo=c-sharp&logoColor=white) ![.NET 8](https://img.shields.io/badge/.NET%208-512BD4?logo=dotnet&logoColor=white)
- **Front-End**: ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
- **Database**: ![Azure SQL](https://img.shields.io/badge/Azure%20SQL-00C7B7?logo=microsoft-sql-server&logoColor=white)
- **Hosting**: ![Azure](https://img.shields.io/badge/Azure-0078D4?logo=microsoft-azure&logoColor=white)

---

## Getting Started 🏁

Follow these steps to set up the **PennyWise** app on your local machine:

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) (for deployment)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or Azure SQL Database

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/pennywise.git
   cd pennywise
   ```
2. **Set up the .NET API**:
   ```bash
   cd PennyWiseAPI
   dotnet restore
   dotnet run
   ```
3. **Set up the React front-end**:
   ```bash
   cd ../expense-tracker-frontend
   npm install
   npm start
   ```

## API Endpoints 🛠️

### Expense Management

| Method   | Endpoint                 | Description                |
|----------|--------------------------|----------------------------|
| `GET`    | `/api/expenses`           | Get a list of all expenses  |
| `POST`   | `/api/expenses`           | Add a new expense           |
| `PUT`    | `/api/expenses/{id}`      | Update an existing expense  |
| `DELETE` | `/api/expenses/{id}`      | Delete an expense           |

---

## Screenshots 📸 COMING SOON YALL 

| Add Expense Form               | Expense Dashboard             |
|---------------------------------|-------------------------------|
| ![Form Screenshot](https://via.placeholder.com/400x300) | ![Dashboard Screenshot](https://via.placeholder.com/400x300) |

---

## Deployment 🚀

### Azure Setup

1. **Create an Azure SQL Database**:

    ```bash
    az sql db create --resource-group your-resource-group --server your-sql-server --name PennyWiseDB --service-objective S0
    ```

2. **Deploy the .NET API to Azure App Service**:

    ```bash
    az webapp up --name PennyWiseAPI --resource-group your-resource-group
    ```

3. **Deploy the React app to Azure Static Web Apps**:

    ```bash
    az staticwebapp create --name pennywise-frontend --source ./expense-tracker-frontend
    ```

---

## Roadmap 📅

- [x] User Authentication
- [x] Expense CRUD Operations
- [ ] Data Visualization with **Chart.js**
- [ ] Multi-currency Support
- [ ] Dark Mode UI

---

## Contributing 🤝

Contributions are welcome! Please feel free to submit a pull request or open an issue to improve the project.

---

## Contact 📬

Got questions, suggestions, or just want to connect? Feel free to reach out!

- **GitHub**: [ailynux](https://github.com/ailynux)
- **LinkedIn**: [Ailyn Diaz](https://www.linkedin.com/in/ailyndiaz01)

