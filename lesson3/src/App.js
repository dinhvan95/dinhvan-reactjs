import './App.css';
import { useState } from 'react';
import {account, typeAccount, banks} from './accountData';
import CashFlowUseHookValidateFormComponent from './CashFlowUseHookValidateFormComponent';
import CashFlowComponent from './CashFlowComponent';

function App() {
  const [accountData, setAccountData] = useState(account);
  const [typeAccountData, setTypeAccountData] = useState(typeAccount);
  const [banksData, setBanksData] = useState(banks);
  return (
    <div>
          <CashFlowUseHookValidateFormComponent account = {accountData} typeAccount = {typeAccountData} banks = {banksData}/>
    </div>
  );
}

export default App;
