"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/src/app/utils";
import ArrowButtonTest from "../../ArrowButton";
import { useTheme } from "@mui/material";

interface Props {
  window?: () => Window;
}

const drawerWidth = "100%";
const navItems = ["Home", "About", "Portfolio", "Contact me"];

export default function DrawerAppBar(props: Props) {
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", zIndex: 0, px: 0 }}
    >
      <Toolbar />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{ justifyContent: "center", width: "100%" }}
          >
            <Link href={`#${item}`} passHref style={{ textDecoration: "none" }}>
              <ListItemButton
                sx={{ justifyContent: "flex-end", width: "100%" }}
              >
                <ListItemText
                  primary={capitalizeFirstLetter(item)}
                  sx={{ color: "#3c3c3c", textAlign: "right" }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px solid #dde1e6",
        px: 0,
        position: 'fixed',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <AppBar
        component="nav"
        sx={{
          width: "100%",
          boxShadow: "none",
          position: "static",
          backgroundColor: "white",
        }}
      >
        <Toolbar sx={{ zIndex: 2 }}>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ px: 0, mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              marginLeft: { xs: "auto", sm: 0 },
              marginRight: { xs: "none", sm: "auto" },
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: "block",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                lwooly.dev
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => {
              const linkTextColor = item === "Contact me" ? "white" : "black";
              const linkText = (
                <Typography
                  variant="body1"
                  sx={{ fontSize: "14px", color: linkTextColor }}
                >
                  {item}
                </Typography>
              );
              return (
                <Link
                  key={item}
                  href={`#${item}`}
                  style={{ textDecoration: "none" }}
                  tabIndex={-1}
                >
                  {item === "Contact me" ? (
                    <ArrowButtonTest sx={{ marginLeft: "3em" }}>
                      {linkText}
                    </ArrowButtonTest>
                  ) : (
                    <Button
                      sx={{
                        color: "#3c3c3c",
                        textTransform: "none",
                        marginLeft: "3em",
                      }}
                    >
                      {linkText}
                    </Button>
                  )}
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Toolbar>
  );
}
