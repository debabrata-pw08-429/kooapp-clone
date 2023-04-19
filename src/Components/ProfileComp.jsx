import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { SiAdguard } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { FeedContext } from "../Context/FeedContext";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { redData, putData } from "../Redux/PeopleDetails/action";

function ProfileComp({ id1, name, category, img, userFollowState }) {
  let { followstate, setFollowstate, idC, setidC, trueCount, setTrueCount } =
    useContext(FeedContext);
  let peopleData = useSelector((state) => state.PeopleReducer.peopleData);
  let dispatch = useDispatch();

  let [s, ss] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  let [bt, setBt] = useState("Follow +");
  let [bt1, setBt1] = useState(0);
  const changeFollow = () => {
    setBt();
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setBt1(1);
      setidC(id1);
      console.log(id1);
      let q = -1;
      let x = [
        ...peopleData.map((e, idx) => {
          if (e.id === id1) {
            q = idx;
            return {
              ...e,
              userFollowState: false,
            };
          }
          //  else {
          //   return e;
          // }
        }),
      ];
      setTrueCount(trueCount - 1);

      console.log(x, "xxxxxx");
      // dispatch(redData(x));

      console.log(x);
      console.log(q, "qqqq");
      console.log(x[q], "changedddd");
      let send = x[q];
      console.log(send, "sendddd data at profileComp");
      dispatch(putData(send, id1));

      setFollowstate(followstate);
      console.log(userFollowState, "userstateofFollow");
      console.log(name);
      console.log(peopleData);
      // }, 3000);
    }, 2000);
  };

  // useEffect(()=>{
  //   console.log("changing");

  // },[userFollowState])

  return userFollowState == true ? (
    <div>
      <Card alignItems="center" height={"12em"} width={"130px"}>
        <CardBody alignItems="center" justify-Content="Center" p="6px 16px">
          <Image
            src={img}
            alt=""
            borderRadius="50%"
            width="80px"
            height="80px"
          />
          <Box marginLeft={"41%"} marginTop={"-6%"} marginBottom={"5%"}>
            <SiAdguard color="#ffbf00" />
          </Box>
          <Stack spacing="3">
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.0",
                fontWeight: "bold",
              }}
            >
              {name}
            </p>
            <Text color="#888888" fontSize="12px">
              {category}
            </Text>
          </Stack>
        </CardBody>
        <Button
          border="1px solid #4b4b4b"
          onClick={changeFollow}
          variant="solid"
          bg={bt1 === 0 ? "#4b4b4b" : "#ffffff"}
          colorScheme="#4b4b4b"
          borderRadius="20px"
          position="relative"
          bottom="-10px"
          height={"26px"}
          width={"79px"}
          fontSize="12px"
        >
          {bt1 === 0 ? (
            bt
          ) : bt1 === 1 ? (
            <TiTick fill={"#4b4b4b"} size={"20px"} />
          ) : (
            ""
          )}{" "}
          {showSpinner && <Spinner />}{" "}
        </Button>
      </Card>
    </div>
  ) : (
    <></>
  );
}

export default ProfileComp;
