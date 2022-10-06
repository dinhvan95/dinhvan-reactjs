import './App.css';
import CashFlowComponent from './CashFlowComponent';
import { useState } from 'react';
import {account, typeAccount, banks} from './accountData';
import PracticeFormLogin from './PracticeFormLogin';

function App() {
  const [accountData, setAccountData] = useState(account);
  const [typeAccountData, setTypeAccountData] = useState(typeAccount);
  const [banksData, setBanksData] = useState(banks);
  return (
    <div>
          <CashFlowComponent account = {accountData} typeAccount = {typeAccountData} banks = {banksData}/>
          {/* <PracticeFormLogin/> */}
    </div>
  );
}

export default App;
