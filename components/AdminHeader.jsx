import React from "react";
import { createStyles, Header, TextInput, Group, Burger, Button, Text } from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { ChevronDown } from "tabler-icons-react";
import { Search } from "tabler-icons-react";
import IconAdminHeader from "../public/img/icon-admin-header.png";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  search: {
    marginRight: "auto",
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  icon: {
    marginLeft: 24,
  },
}));

function AdminHeader() {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();
  const searchButton = (
    <Button
      styles={(theme) => ({
        root: {
          backgroundColor: "#0D28A6",
          color: "white",

          "&:hover": {
            backgroundColor: theme.fn.darken("#0D28A6", 0.5),
          },
        },
      })}
    >
      Search
    </Button>
  );
  return (
    <Header height={70} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={() => toggleOpened()} size="sm" />
        </Group>

        <Group spacing="lg">
          <TextInput className={classes.search} rightSection={searchButton} placeholder="Search" icon={<Search size={16} />} />
          <div className={classes.icon}>
            <Image src={IconAdminHeader} alt="iconAdmin" />
          </div>
          <Text>Unis Badri</Text>
          <ChevronDown />
        </Group>
      </div>
    </Header>
  );
}

export default AdminHeader;
