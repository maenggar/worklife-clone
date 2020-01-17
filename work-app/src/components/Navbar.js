import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LogoIcon from "../assets/logo-1.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navMenu: {
    backgroundColor: "hsl(0, 0%, 100%)",
    boxShadow: "hsla(29, 36%, 23%, 0.09)"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "hsl(0, 1%, 44%)"
  },
  title: {
    flexGrow: 1,
    color: "hsl(0, 1%, 44%)",
    fontSize: "17px",
    fontWeight: 700,
    paddingBottom: "41px",
    paddingTop: "41px"
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navMenu}>
        <Toolbar>
          <IconButton src={LogoIcon} />
          <Typography variant="h6" className={classes.title}>
            HOME
          </Typography>
          <Typography variant="h6" className={classes.title}>
            SERVICES
          </Typography>
          <Typography variant="h6" className={classes.title}>
            ABOUT
          </Typography>
          <Typography variant="h6" className={classes.title}>
            OUR PRODUCT
          </Typography>
          <Typography variant="h6" className={classes.title}>
            NEWS
          </Typography>
          <Typography variant="h6" className={classes.title}>
            CAREERS
          </Typography>
          <Typography variant="h6" className={classes.title}>
            CONTACTS
          </Typography>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
