import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ModalRegister from "../molecule/modal/ModalRegister";
import ModalLogin from "../molecule/modal/ModalLogin";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

export default function NavBar() {
  const [isOpenedLogin, setOpenLogin] = React.useState(false);
  const [isOpenedRegister, setOpenRegister] = React.useState(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleCloseRegister = () => setOpenRegister(false);
  const isLoggedIn = localStorage.getItem("token");

  return (
    <React.Fragment>
      <ModalLogin
        open={isOpenedLogin}
        handleClose={handleCloseLogin}
        style={null}
      />
      <ModalRegister
        open={isOpenedRegister}
        handleClose={handleCloseRegister}
        style={null}
      />
      <Box sx={{ flexGrow: 1 }} bgcolor="green">
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h4"
              fontWeight="bold"
              component="a"
              sx={{ flexGrow: 1, textDecoration: "none", color: "whitesmoke" }}
              href="/"
            >
              My Diary
            </Typography>
            {isLoggedIn ? (
              <Avatar sx={{ bgcolor: "yellow" }}>A</Avatar>
            ) : (
              <>
                {" "}
                <Button color="inherit" onClick={handleOpenLogin}>
                  Login
                </Button>
                <Button color="inherit" onClick={handleOpenRegister}>
                  Register
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
