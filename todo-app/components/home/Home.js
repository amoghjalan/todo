import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import ListContainer from "../listContainer/ListContainer";
import { GET_USERS, GET_USERDATA, GET_USERTASKS } from "../../graphql/queries";
import Navbar from "../navbar/Navbar";
import AddItem from "../addItem/AddItem";
import "./Home.module.css";
import Loader from "../loader/Loader";
import Error from "../error/Error";

const Home = () => {
  const usersData = useQuery(GET_USERS);
  const [getUserData, userData] = useLazyQuery(GET_USERDATA);
  const [getUserTasks, userTasks] = useLazyQuery(GET_USERTASKS);
  console.log(usersData.data);
  console.log(userData.data);
  console.log(userTasks.data);
  const [addUserModal, setUserModal] = React.useState(false);
  const [addItemModal, setItemModal] = React.useState(false);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {usersData.data && (
        <>
          <Navbar
            users={usersData.data}
            getUserData={getUserData}
            getUserTasks={getUserTasks}
            setUserModal={setUserModal}
          />
          {/* {addUserModal && (
            <AddUserModal
              getUserData={getUserData}
              getUserTasks={getUserTasks}
            />
          )} */}
          {userTasks.data ? (
            <>
              {/* <FilterContainer
              getUserTasks={getUserTasks}
              userID={userData.data.findUserById.id}
            /> */}
              <ListContainer
                userTasks={userTasks.data.findUserItems}
                userID={userData.data.findUserById.id}
              />
              <AddItem
                setisModalOpen={setItemModal}
                userID={userData.data.findUserById.id}
              />
              {/* {addItemModal && <AddItemModal />} */}
            </>
          ) : (
            <h3>Select User</h3>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
