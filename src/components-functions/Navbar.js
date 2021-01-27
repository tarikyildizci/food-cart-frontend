import { Typography, Button, IconButton } from '@material-ui/core';
import React, { useContext } from 'react';
import { Navbar as CustomNavbar } from '../componentLibrary';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = ({ withSearch, options, value, setValue }) => {
  const { setUser } = useContext(UserContext);

  const Logout = () => {
    setUser(null);
  };
  return (
    <CustomNavbar
      value={value}
      setValue={setValue}
      withSearch={withSearch}
      options={options}
      LogoComponent={
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h4">Food</Typography>
        </Link>
      }
      RightComponent={
        <>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Link>
          <Button
            onClick={Logout}
            size="small"
            variant="contained"
            color="primary"
          >
            Logout
          </Button>
        </>
      }
    ></CustomNavbar>
  );
};

export default Navbar;
