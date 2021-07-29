import React from "react";
import { Image, Text, VStack } from "@chakra-ui/react";

interface ContactCardProps {
  name: string;
  email: string;
  profilePicture: string;
}

export const ContactCard = (props: ContactCardProps) => {
  const { name, email, profilePicture } = props;
  return (
    <VStack border="1px solid black" padding="25px" borderTopRadius="md" >
      <Image
        borderRadius="full"
        boxSize="100px"
        src={profilePicture}
        alt={`Picture of ${name}`}
      />
      <Text fontSize="20px" >
        {name}
      </Text>
      <Text fontSize="20px">
        {email}
      </Text>
    </VStack>
  );
};
