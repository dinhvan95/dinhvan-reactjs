import './App.css';
import CashFlowComponent from './CashFlowComponent';
import { useState } from 'react';
import {account, typeAccount, banks} from './accountData';

function App() {
  const [accountData, setAccountData] = useState(account);
  const [typeAccountData, setTypeAccountData] = useState(typeAccount);
  const [banksData, setBanksData] = useState(banks);
  return (
    <div>
          <CashFlowComponent account = {accountData} typeAccount = {typeAccountData} banks = {banksData}/>
    </div>
  );
}

export default App;
