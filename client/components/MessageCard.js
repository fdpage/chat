import React from "react";
import { Avatar, Flex, Text, Box } from "@chakra-ui/react";

export default function (props) {
  return (
    <Flex
      px={"2"}
      py={"2"}
      mt={"4"}
      height="fit-content"
      flexDirection={props.isUser ? "row-reverse" : "row"}
      ml={"2"}
      bgColor={props.isUser ? "#1c2c3c" : "#23272A"}
      cursor="pointer"
      key={props.id}
      _hover={{ bgColor: props.isUser ? "#2a3a49" : "#2a2c2d" }}
    >
      <Avatar
        mt={"3"}
        size="md"
        name={props.name}
        src={`https://avatars.dicebear.com/api/bottts/${props.name}.svg`}
      />
      <Flex flexGrow="1" flexDirection={"column"} justifyContent={"center"}>
        <Flex
          flexDirection={props.isUser ? "row-reverse" : "row"}
          h="7"
          pt={"2"}
          px={"4"}
          gap={"2.5"}
        >
          <Text
            fontWeight={"bold"}
            fontSize={"xl"}
            position={"relative"}
            top={"-2"}
            color="whiteAlpha.700"
          >
            {props.name.slice(0, 25) === props.name
              ? props.name
              : props.name.slice(0, 24) + "..."}
          </Text>
          <Text fontSize={"12"} position={"relative"} top={"0"} color={"white"}>
            {props.time}
          </Text>
        </Flex>
        <Flex>
          <Text wordBreak={"break-word"} px={"4"} py={"2.5"} color={"white"}>
            {props.message}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}