import Users from '../utils/User.data';
import User from '../models/User';

const userService = {
  createUser(userData) {
    const newUser = new User(); // User entry should be modelled after the user models
    const allUsers = Users;
    newUser.firstName = userData.firstName;
    newUser.lastName = userData.lastName;
    newUser.password = userData.password;

    const newUserEntry = {
      id: allUsers.length + 1,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      password: newUser.password,


    };

    allUsers.push(newUserEntry);
    return newUserEntry;
  },

  loginUser(userData) {
    /*
      Search through to find if user exist, return true
        */
    const allUsers = Users;
    // eslint-disable-next-line max-len
    const findUser = allUsers.find(user => (user.email === userData.email && user.password === userData.password));

    return findUser;
  },
};

export default userService;
