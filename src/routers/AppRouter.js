/* ===== App Dependencies ===== */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* ===== Styles and Components ===== */
import Header from "./../components/Header";
import ExpenseDashboardPage from "./../components/ExpenseDashboardPage";
import AddExpensePage from "./../components/AddExpensePage";
import EditExpensePage from "./../components/EditExpensePage";
import NotFoundPage from "./../components/NotFoundPage";
import Footer from "./../components/Footer";

const AppRouter = () => (
  <BrowserRouter>
    <main className="main-app">
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id?" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </main>
  </BrowserRouter>
);

export default AppRouter;
