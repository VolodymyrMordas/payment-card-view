import React from 'react';
import './App.css';
import {PaymentCard} from "./PaymentCard";
import {Box} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Box className="App-header">
        <Router>
          <Switch>
            <Route path="/:cardNumber/:expM/:expY/:cardHolder" children={<PaymentCard />} />
            <Route path="*" children={<PaymentCard />} />
          </Switch>
        </Router>
      </Box>
    </div>
  );
}

export default App;
