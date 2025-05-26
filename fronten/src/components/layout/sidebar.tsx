import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary text-white h-full p-6">
      <h2 className="text-xl font-bold mb-6">Expense Tracker</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/transactions" className="hover:text-blue-600">Transactions</Link>
        <Link to="/settings" className="hover:text-blue-600">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
