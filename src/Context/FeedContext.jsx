import { useState, createContext } from "react";
import { useSelector } from "react-redux";
export const FeedContext = createContext();

function FeedContextProviderComponent({ children }) {
    const [followstate,setFollowstate]=useState(false);
    const [idC,setidC]=useState();
    
    let peopleData = useSelector(state=>state.PeopleReducer.peopleData);
    const [trueCount,setTrueCount] = useState(peopleData.length);
    console.log(trueCount,"ttt");

  return (
    <FeedContext.Provider value={{ followstate,setFollowstate,idC,setidC,trueCount,setTrueCount }}>
      {children}
    </FeedContext.Provider>
  );
}

export default FeedContextProviderComponent;