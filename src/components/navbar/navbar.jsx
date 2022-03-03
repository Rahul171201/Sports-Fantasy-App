import React from 'react';
import './navbar.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function navbar() {
  return (
    <div className='main'>
        <div className='box'>
        <div className='profile'></div>
        <img src="/logo.jpeg" alt="logo" className='logoimage'></img>
        <NotificationsActiveIcon className='notificationicon'></NotificationsActiveIcon>
        <AccountBalanceWalletIcon classname='balanceicon'></AccountBalanceWalletIcon>
        </div>
        
    </div>
  )
}
