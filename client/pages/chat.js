import {
  Box,
  Flex,
  Button,
  Avatar,
  Stack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import MessageBox from "../components/MessageBox";
import Navbar from "../components/Navbar";
import FriendCard from "../components/FriendCard";
import { SunIcon } from "@chakra-ui/icons";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
function Chat() {
  const [select, setSelect] = useState(-1);
  return (
    <Flex m={"0"} p="0" flexDirection={"row"}>
      <Box maxW="fit-content" p="0" m="0">
        <Flex
          direction="column"
          w="300px"
          h="100vh"
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <Flex
            align="center"
            justify="space-between"
            position="sticky"
            top={0}
            zIndex={199}
            p={4}
            h={"81px"}
            borderBottom="1px solid"
            bgColor={"#23272A"}
            borderRight={"1px solid #2D3748"}
          >
            <Avatar
              src={
                "https://lh3.googleusercontent.com/a/AEdFTp7kiDrC2tOsV1S8_g-WJXQlmhRAFFZCYskUxGsYFA=s96-c"
              }
            />
            <Stack isInline>
              <IconButton
                size="sm"
                isRound
                _focus={{ boxShadow: "none" }}
                icon={<SunIcon />}
              />

              <IconButton
                icon={<Icon as={FiLogOut} />}
                _focus={{ boxShadow: "none" }}
                size="sm"
                isRound
              />
            </Stack>
          </Flex>
          <Flex
            direction="column"
            borderRight="1px solid"
            borderColor={"gray.700"}
            bg={"#1b1e20"}
            flex="1"
          >
            <Flex direction="column" p={4}>
              <Button
                _focus={{ boxShadow: "none" }}
                letterSpacing="wide"
                textTransform="uppercase"
                fontSize="md"
              >
                new chat
              </Button>
            </Flex>
            <Flex flexDir={"column"} flexGrow="1" gap="2px">
              {Array(50)
                .fill("Daniel")
                .map((v, i) => {
                  return (
                    <Box
                      onClick={() => {
                        setSelect(i);
                        // console.log(select);
                      }}
                    >
                      {" "}
                      <FriendCard name={v} id={i} select={select} />
                    </Box>
                  );
                })}
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Flex
        p="0"
        m="0"
        flexDir={"column"}
        bgColor={"#23272A"}
        height="100vh"
        flexGrow={"1"}
      >
        <Navbar name="daniel" />
        <Box
          bgColor={"#23272A"}
          overflowY="scroll"
          height={"80vh"}
          mb={"4"}
          py={"2"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <Flex flexDirection={"column"}>
            {Array(50)
              .fill("dani")
              .map((val, i) => {
                return <FriendCard id={i} name={val} />;
              })}
          </Flex>
        </Box>
        <MessageBox />
      </Flex>
    </Flex>
  );
}

export default Chat;