import React from "react";
import {
  CartNavStyled,
  UserContainer,
  NavbarContainerStyled,
  RegisterContainer,
  LinksContainer,
} from "./NabarStyles";
import img_Logo2 from "../Images/img_Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  return (
    <NavbarContainerStyled>
      <ModalCart />
      <Link to="/">
        <img src= 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_Logo2_ybirp6.png' alt="Logo" />
      </Link>
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
