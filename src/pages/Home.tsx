import React from "react";
import { Box, VStack, Grid } from "@chakra-ui/react";
import { ContactCard } from "../components/ContactCard";
import useAsyncState from "../hooks/useAsyncState";
import UserApi from "../services/users.service";

export const Home = () => {
  const userApi = new UserApi();

  const [userData, isUserDataLoading] = useAsyncState(() =>
    userApi.getUsers().then((res: any) => res.data.users)
  );

  console.log(userData);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          {!isUserDataLoading &&
            userData?.map((item: any) => {
              return (
                <ContactCard
                  profilePicture={item?.avatar_url}
                  name={item?.name}
                  email={item?.email}
                />
              );
            })}
        </VStack>
      </Grid>
    </Box>
  );
};
