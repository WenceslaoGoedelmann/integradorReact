import React from "react";
import {
  CartNavStyled,
  UserContainer,
  NavbarContainerStyled,
  RegisterContainer,
  LinksContainer,
  LogoContainer,
} from "./NabarStyles";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import { useSelector } from "react-redux";
import { toggleHiddenMenu } from '../../redux/user/userSlice';
import { FaUser} from 'react-icons/fa';

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  return (
    <NavbarContainerStyled>
      <ModalCart />
      <LogoContainer>
      <Link to="/">
        <img src= 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1693405553/MySecurity/img_Logo2-transparent_xf9xfm.png' alt="Logo" />
      </Link>
      </LogoContainer>
      <FaUser />
      <LinksContainer>
      <UserContainer
        onClick={() => (currentUser ? navigate("/user") : navigate("/login"))}
      >
        <span>
          {currentUser ? `Hola! ${currentUser.nombre}` : "Inicia sesión"}
        </span>
      </UserContainer>
      <RegisterContainer onClick={() => navigate("/register")}>
        {currentUser ? `` : "Registrate"}
      </RegisterContainer>
      <CartNavStyled>
        <CartIcon />
      </CartNavStyled>
      </LinksContainer>
    </NavbarContainerStyled>
  );
};

export default Navbar;
