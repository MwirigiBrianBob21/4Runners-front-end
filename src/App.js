import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import PacManLoader from 'react-spinners/PacmanLoader';
import SignUp from './components/SignUp';
import SignIn from './components/signIn';
import Reservation from "./components/Reservation";
import ViewReservation from "./components/ViewReservation";


// const StyledRoot = styled.div`
//   padding: 50px 12px;
// `;
// const StyledContainer = styled.div`
//   max-width: 550px;
//   width: 100%;
//   margin: auto;
// `;

function App() {
  const [loading, setLoading] = useState(false);

  // const [menu, setMenu] = useState([]);
  // const [filteredMenu, setFilteredMenu] = useState([]);
  // const [favMenu, setFavMenu] = useState([]);

  const override = {
    display: "block",
    borderColor: "red",
    marginTop: "20%",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [currentUser, setCurrentUser] = useState(null);
  const changeUser = (user) => {
    setCurrentUser(user);
  };


  const date = new Date().toLocaleDateString();
  const onCommentClick = () => alert("You clicked comments");
  const onLikesClick = () => alert("You clicked comments");
  const onViewsClick = () => alert("You clicked comments");

      </div>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      {/* <Route exact path="/about" element={<About/>}></Route> */}
            <Route exact path="/reservation" element={<Reservation/>}></Route>


      <Route exact path="/menu" element={<Menu/>}></Route> 
      <Route exact path="/signin" element={<SignIn changeUser={changeUser} />} />
      <Route exact path="/signup" element={<SignUp />} /> 
      <Route exact path="/viewreservation" element={<ViewReservation  />} />
    
      </Routes>
      </Router>
      </div>
    }


  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
      onClick: onCommentClick,
    },
    {
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ];


  return (
    <div className="App">
      {loading ? (
        <PacManLoader
          color={"#bf2222"}
          loading={loading}
          cssOverride={override}
          size={30}
          alignItem={"center"}
          marginLeft={"50px"}
          
          
        />
      ) : (
        <div>
          <Router>
            <div>
              <Navbar />
            </div>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              {/* <Route exact path="/about" element={<About/>}></Route> */}
              <Route
                exact
                path="/reservation"
                element={<Reservation />}
              ></Route>

              <Route exact path="/menu" element={<Menu />}></Route>

              <Route
                exact
                path="/signin"
                element={<SignIn changeUser={changeUser} />}
              />
              <Route exact path="/signup" element={<SignUp />} />
              <Route
                exact
                path="/viewreservation"
                element={<ViewReservation />}
              />

              <Route
                exact
                path="/menucard"
                element={
                  
                      <MenuCard
                        title="The Benefits of Green Apples"
                        date={date}
                        description="Green apples have a high fiber content which helps in increasing the
      body's metabolism. While consuming an apple, make sure that you're not
      tossing the peel in the trash. Consuming apple with its peel improves
      the overall health. Due to its high fiber content, apple helps in
      detoxification process. It keeps the liver and digestive system away
      from harmful elements."
                        actions={buttons}
                      />
                   
                }
              />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}
export default App;

