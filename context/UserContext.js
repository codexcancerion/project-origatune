"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { setLoginAuthCookie, getLoginAuthCookie, removeLoginAuthCookie } from '../utils/userLogInCookies';
import { setUserAuthCookie, getUserAuthCookie, removeUserAuthCookie } from '../utils/userUserCookies';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);


export const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(() => {
    // Retrieve userLoggedIn state from cookie
    const storedUserLoggedIn = getLoginAuthCookie();
    return storedUserLoggedIn ? JSON.parse(storedUserLoggedIn) : false;
  });
  const [userData, setUserData] = useState({
    personalInfo: {
      fullName: "Herbert Alem Acoking",
      email: "herbert@gmail.com",
      phoneNumber: "09123456789"
    },
    shippingInfo: {
      houseNumber: "123",
      street: "Kalye",
      barangay: "Tawang",
      cityMunicipality: "La Trinidad",
      province: "Benguet",
      region: "Cordillera Administrative Region"
    },
    paymentInfo: {
      useCreditCard: false,
      cardholderName: "",
      cardNumber: "",
      cvvcvc: "",
      useMaya: false,
      mayaName: "",
      mayaNumber: "",
      useGCash: true,
      gcashName: "Herbert Acoking",
      gcashNumber: "09123456789"
    },
    loginInfo: {
      username: "admin",
      password: "admin"
    }
  });
// const [userData, setUserData] = useState({});

  // Update cookie when userLoggedIn state changes
  useEffect(() => {
    setLoginAuthCookie(JSON.stringify(userLoggedIn));
  }, [userLoggedIn]);

  const updateUserData = (data) => {
    setUserData(data);
  };

  const updateUserLogIn = () => {
    setUserLoggedIn(true);
    console.log("successful log in context update");
  };

  const logout = () => {
    setUserLoggedIn(false);
    removeLoginAuthCookie();
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, userLoggedIn, updateUserLogIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};
