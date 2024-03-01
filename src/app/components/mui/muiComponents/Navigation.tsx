"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
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
import ArrowButton from "../../ArrowButton";

interface Props {
  window?: () => Window;
}

const drawerWidth = "100%";
const navItems = ["Home", "About", "Projects", "Contact me"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ my: 2 }}>
        lwooly.dev
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{ justifyContent: "center", width: "100%" }}
          >
            <Link href={`#${item}`} passHref>
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
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #dde1e6",
          position: "static",
          backgroundColor: "white",
        }}
      >
        <Toolbar sx={{ zIndex: 2, justifyContent: { xs: "end", sm: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: { xs: 0, sm: 2 }, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="/"
            style={{ marginRight: "auto", textDecoration: "none" }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                margin: 0,
              }}
            >
              lwooly.dev
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              if (item === "Contact me") {
                return (
                  <Link key={item} href={`#${item}`}>
                    <ArrowButton sx={{ marginLeft: "3em" }}>{item}</ArrowButton>
                  </Link>
                );
              }
              return (
                <Link key={item} href={`#${item}`}>
                  <Button
                    sx={{
                      color: "#3c3c3c",
                      textTransform: "none",
                      marginLeft: "3em",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                      {item}
                    </Typography>
                  </Button>
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
            zIndex: 1,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}
