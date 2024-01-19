import { useContext, useRef, useState } from 'react';
import UserContext from '../utils/userContext';

const User = () => {
  
  const {loggedInUser,setUserData} = useContext(UserContext);
  
  const firstNameRef = useRef(loggedInUser.firstName)
  const lastNameRef = useRef(loggedInUser.lastName)

  const [isEditing, setIsEditing] = useState(false);


  const saveUserData = () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    setUserData({
      ...loggedInUser,
      ["firstName"]:firstName,
      ["lastName"]:lastName
    });
    setIsEditing(false);
  };

  return (
    <div className="mx-24 my-10">
      <div className="px-20 py-8 bg-white rounded-md ">
        <h2 className="text-2xl font-bold mb-4">User Info</h2>
        {isEditing ? (
          <div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={loggedInUser.username}
                className="w-full border p-2 rounded-md bg-gray-100"
                disabled={true}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loggedInUser.email}
                className="w-full border p-2 rounded-md bg-gray-100"
                disabled={true}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={loggedInUser.firstName}
                ref={firstNameRef}
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder={loggedInUser.lastName}
                ref={lastNameRef}
                className="w-full border p-2 rounded-md"
              />
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={()=>saveUserData()}
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div>
            <p>
              <strong>Username:</strong> {loggedInUser.username}
            </p>
            <p>
              <strong>Email:</strong> {loggedInUser.email}
            </p>
            <p>
              <strong>First Name:</strong> {loggedInUser.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {loggedInUser.lastName}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
