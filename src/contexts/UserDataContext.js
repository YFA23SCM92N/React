import { createContext } from "react";

const UserDataContext = createContext({
  userData: {
    name: "Yaswanth",
    email: "yaswanthmahesh7@gmail.com",
    address: "3001 S King Drive",
    phone: "8985784383",
  },
});

export default UserDataContext;