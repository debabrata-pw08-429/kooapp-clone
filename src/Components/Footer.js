import { Box, Divider, Text, Link, HStack, Stack } from "@chakra-ui/react";
import KooLogo from "../Images/koo.svg";
import FooterLogo from "../Images/Footer_app.png";

function Footer({ links }) {
  return (
    <>
      <Stack>
        <HStack
          flexDirection={["column", "row"]}
          justifyContent={["center", "space-around"]}
          bg="#4b4b4b"
          py="90px"
          width={window.innerWidth}
          textColor="white"
          mb="-20px"
        >
          <Box
            flexDirection="column"
            display="flex"
            justifyContent="space-between"
            alignItems={{ base: "center", lg: "start" }}
            mb="1rem"
            order={[2, 1]}
          >
            <Box display="flex" mb="1.5rem">
              <Link href="/feed" display="inline-flex" fontSize="2rem">
                <Box as="img" w={10} h={14} src={KooLogo} alt="Koo" />
                <Text ml={2} fontWeight="bold">
                  Koo
                </Text>
              </Link>
            </Box>
            <Text fontSize="sm" color="gray.500">
              ©2022 Copyright Koo Bombinate Technologies Pvt. Ltd.
            </Text>
          </Box>

          <Box
            display="flex"
            textAlign="left"
            order={[1, 2]}
            mb={["12px", null]}
          >
            <Box mr={6}>
              <Text fontSize="sm" fontWeight="bold" mb={2}>
                Quick Links
              </Text>
              <Divider mb={2} />
              {links.quickLinks.map((link) => (
                <Link href={link.href} key={link.text}>
                  <Text fontSize="sm">{link.text}</Text>
                </Link>
              ))}
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb={2}>
                Support
              </Text>
              <Divider mb={2} />
              {links.supportLinks.map((link) => (
                <Link href={link.href} key={link.text}>
                  <Text fontSize="sm">{link.text}</Text>
                </Link>
              ))}
            </Box>
          </Box>
        </HStack>

        <Box textAlign="center" py="1rem" bg="#f1f1ee">
          Available in English, हिन्दी, मराठी, தமிழ், తెలుగు, മലയാളം, ગુજરાતી,
          বাংলা, & many more languages coming soon...
        </Box>

        <HStack
          pb="1rem"
          justifyContent="space-around"
          flexDirection={["column", "row"]}
        >
          <Box
            flexDirection="column"
            justifyContent="space-between"
            textAlign={["center", "left"]}
            py="0.5rem"
          >
            <Text fontWeight="bold">Koo is best experienced on the app</Text>

            <Text fontSize="sm" color="gray.500">
              Download the Koo App Now and get all the latest features
            </Text>
          </Box>
          <Box>
            <Box as="img" width="250px" height="50px" src={FooterLogo} />
          </Box>
        </HStack>
      </Stack>
    </>
  );
}

export default Footer;
