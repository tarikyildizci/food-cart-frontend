import axios from 'axios';

export const GetAllRestaurants = async () => {
  try {
    const response = await axios.get(
      'https://food-cart-api.herokuapp.com/restaurants'
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const UserLogin = async (email, password) => {
  try {
    const response = await axios.post(
      'https://food-cart-api.herokuapp.com/users/login',
      {
        email,
        password,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
