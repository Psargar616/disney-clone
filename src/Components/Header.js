import React, { useEffect } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import StarIcon from "@mui/icons-material/Star";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { auth, provider } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../Features/User/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  // instead of useNavigate();
  // In react-router-dom v6 useHistory() is replaced by useNavigate().
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // this runs when username is updated
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      // if user is logged in navigate to home page
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleAuth = () => {
    // auth.signInWithPopup(provider).then((result) => {
    //     console.log(result)
    // }).catch(
    //     (error) => {
    //         alert(error.message)
    //     }
    // );

    if (!userName) {
      const auth = getAuth();
      auth.languageCode = "it";
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          console.log(result);
          setUser(result.user);
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          // const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          alert(error);
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }else if(userName){
      auth.signOut().then( () => {
        dispatch(setSignOutState())
        navigate("/")
      }).catch((err) => alert(err))
    }


  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg"></img>
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <HomeIcon fontSize="small" style={{ zIndex: "auto" }} />
              <span>HOME</span>
            </a>
            <a href="/home">
              <SearchIcon fontSize="small" style={{ zIndex: "auto" }} />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <AddOutlinedIcon fontSize="small" style={{ zIndex: "auto" }} />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <StarIcon fontSize="small" style={{ zIndex: "auto" }} />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <TheaterComedyIcon fontSize="small" style={{ zIndex: "auto" }} />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <LiveTvIcon fontSize="small" style={{ zIndex: "auto" }} />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName}></UserImg>
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}

      {/* <Login onClick={handleAuth}>Login</Login> */}
    </Nav>
  );
};

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border-radius: 4px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  box-shadow: rgb(0 0 0 / 50%) 0 0 18px 0;
  padding: 10px;
  font-size: 12px;
  /* font-weight: 600; */
  text-transform: uppercase;
  opacity: 0;
  letter-spacing: 2px;
  width: 100px;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  cursor: pointer;
  max-height: 70px;
  margin-top: 4px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 5px;

    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      /* padding: 2px 0; */
      padding-top: 3px;
      white-space: nowrap;
      position: relative;

      &::before {
        content: "";
        display: block;
        visibility: hidden;
        width: auto;
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span::before {
        transform: scaleX(1);
        opacity: 1 !important;
        visibility: visible;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border-radius: 4px;
  border: 1px solid #f9f9f9;
  cursor: pointer;
  transition: all 200ms ease-out 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    font-weight: bold;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const SignOut = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
  letter-spacing: 3px;
`;

export default Header;
