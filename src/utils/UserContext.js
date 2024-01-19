import { createContext } from "react";

const UserContext = createContext({
    userData : {
        username: 'john_doe',
        email: 'john@example.com',
        firstName: 'John',
        lastName: 'Doe',
      }
});

export default UserContext;