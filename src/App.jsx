import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BankDepositSlip from "./components/BankDepositSlip";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/deposit-slip">Deposit Slip</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to DFCC Bank's Portal</h1>}
        />
        <Route path="/deposit-slip" element={<BankDepositSlip />} />
      </Routes>
    </Router>
  );
};

export default App;
