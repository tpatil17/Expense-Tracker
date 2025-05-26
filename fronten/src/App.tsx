import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/Applayout";

const Dashboard = () => (
  <div className="bg-indigo-500 rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
    <p>Welcome to your smart expense tracker. Here you'll see a summary of your transactions, spending, and fraud alerts.</p>
  </div>
);
const Transactions = () => <h2 className="text-2xl font-bold">Transactions</h2>;
const Settings = () => <h2 className="text-2xl font-bold">Settings</h2>;

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        <Route
          path="/transactions"
          element={
            <AppLayout>
              <Transactions />
            </AppLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <AppLayout>
              <Settings />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


