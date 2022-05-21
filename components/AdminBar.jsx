import React, { useState } from "react";
import { createStyles, Navbar, Stack, Anchor, UnstyledButton, Tooltip, Text, Title, Header, AppShell, Group, SimpleGrid } from "@mantine/core";
import { Home, Truck } from "tabler-icons-react";
import { IconAdminNavbarDashboard } from "../public/img/icon-admin-navbar-dashboard.png";
import Image from "next/image";
import AdminNavbarLogo from "../public/img/logo-admin-navbar.png";
import AdminSideBarLogo from "../public/img/logo-admin-sidebar.png";
import AdminHeader from "./AdminHeader";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  content: {
    backgroundColor: "#E5E5E5",
  },

  navbar: {
    backgroundColor: "#0D28A6",
    height: 902,
    display: "flex",
    flex: "0 0 70px",
    flexDirection: "column",
    alignItems: "center",
  },

  sidebar: {
    width: 220,
  },

  logo: {
    display: "flex",
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  logo2: {
    paddingLeft: 24,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  divider: {
    border: "1px solid #AAAAAA",
    marginBottom: theme.spacing.md,
  },

  mainLink: {
    width: 70,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25) : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 7],
    },
  },

  caption: {
    display: "block",
    fontSize: theme.fontSizes.xs,
  },
  title: {
    color: "#CFD4ED",
    fontSize: 14,
  },

  activeSidebar: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 24px`,
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    height: 44,
    lineHeight: "44px",

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  activeSidebarActive: {
    "&, &:hover": {
      backgroundColor: "#CFD4ED",
      color: theme.black,
    },
  },
}));

const mainLinksMockdata = [
  { icon: Home, label: "Dashboard" },
  { icon: Truck, label: "Cars" },
];

export function AdminBar({ children }) {
  //   classes -> getter & cx -> setter
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Dashboard");

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
      <UnstyledButton onClick={() => setActive(link.label)} className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}>
        <Stack align="center" spacing="xs">
          <link.icon />
          <span className={classes.caption}>{link.label}</span>
        </Stack>
      </UnstyledButton>
    </Tooltip>
  ));

  return (
    <>
      <Navbar>
        <Navbar.Section grow className={classes.wrapper}>
          <div className={classes.navbar}>
            <div className={classes.logo}>
              <Image src={AdminNavbarLogo} alt="Admin Navbar Logo"></Image>
            </div>
            <div className={classes.divider} />
            {mainLinks}
          </div>
          <div className={classes.sidebar}>
            <div className={classes.logo2}>
              <Image src={AdminSideBarLogo} alt="Logo Sidebar"></Image>
            </div>
            <div className={classes.divider} />
            <Title order={5} pt={34} pb={19} pl={24} className={classes.title}>
              {active}
            </Title>
            <div className={cx(classes.activeSidebar, { [classes.activeSidebarActive]: active })}>{active}</div>
          </div>
          <Stack spacing="xs" sx={() => ({ width: "100%", overflow: "auto" })} className={classes.content}>
            <AdminHeader />
            {children}
          </Stack>
        </Navbar.Section>
      </Navbar>
    </>
  );
}
