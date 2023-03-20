import { useState, createContext } from "react";
import { useSelector } from "react-redux";
export const FeedContext = createContext();

function FeedContextProviderComponent({ children }) {
  let [log, setLog] = useState(false);
  const [followstate, setFollowstate] = useState(false);
  const [idC, setidC] = useState();

  let peopleData = useSelector((state) => state.PeopleReducer.peopleData);
  const [trueCount, setTrueCount] = useState(peopleData.length);
  console.log(trueCount, "ttt");

  return (
    <FeedContext.Provider
      value={{
        log,
        setLog,
        followstate,
        setFollowstate,
        idC,
        setidC,
        trueCount,
        setTrueCount,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
}

export default FeedContextProviderComponent;
