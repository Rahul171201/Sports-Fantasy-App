import React from 'react';
import './navbar.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function navbar() {
  return (
    <div className='main'>
      <div className='box'>
        <img src="/profile.jpg" alt="profile" className='profile'></img>
        <img src="/logo.jpeg" alt="logo" className='logoimage'></img>
        <NotificationsActiveIcon className='notificationicon' fontSize='large'></NotificationsActiveIcon>
        <div></div>
        <AccountBalanceWalletIcon className='walleticon' fontSize='large'></AccountBalanceWalletIcon>
      </div>

    </div>
  )
}
