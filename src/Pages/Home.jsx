import "../Styles/stats.css";
import Navbar from "../Components/Navbar";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Footer from "../Components/Footer";
import { HStack, Stack, VStack } from "@chakra-ui/react";

const Home = () => {
  const links = {
    quickLinks: [
      { text: "About Us", href: "https://info.kooapp.com/category/about-us/" },
      {
        text: "In the Press",
        href: "https://medium.com/koo-app/koo-media-coverage-389c1a174026",
      },
      { text: "FAQs", href: "https://info.kooapp.com/faq/" },
      {
        text: "Eminence",
        href: "https://info.kooapp.com/koo-accounts-of-eminence/",
      },
      { text: "Download App", href: "https://app.adjust.net.in/zf169cq" },
    ],
    supportLinks: [
      { text: "Contact Us", href: "https://info.kooapp.com/contact-us/" },
      {
        text: "Privacy Policy",
        href: "https://info.kooapp.com/privacy-policy/",
      },
      {
        text: "Terms of Service",
        href: "https://info.kooapp.com/terms-of-service/",
      },
      {
        text: "Community Guidelines",
        href: "https://info.kooapp.com/community-guidelines/",
      },
      {
        text: "Compliance",
        href: "https://info.kooapp.com/category/compliance/",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <Stack>
        <HStack>
          <Section1 />
        </HStack>
        <HStack width={window.innerWidth}>
          <Section2 />
        </HStack>
        <HStack>
          <Section3 />
        </HStack>
        <HStack>
          <Section4 />
        </HStack>
        <VStack>
          <Footer links={links} />
        </VStack>
      </Stack>
    </div>
  );
};

export default Home;
