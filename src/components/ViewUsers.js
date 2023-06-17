import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/users/usersSlice";
import { useEffect } from "react";
import UserNames from "./UserNames";

const ViewUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

//   if (isLoading) {
//     return <h4>Loading...</h4>;
//   }
//   if (error) {
//     return <h4>Page not found</h4>;
//   }

//   return users.map((item) => {
//     return (
//       <div key={item.id.value}>
//         <h3>{`${item.name.first} ${item.name.last}`}</h3>
//         <img src={item.picture.medium} alt="" />
//       </div>
//     );
//   });
// };

  return (
    <>
      <h2>List of Users</h2>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error ? <div>Error: {error}</div> : null}
      {!isLoading && users.length ? (
        <ul>
          {
            users.map((user) => (<UserNames key={user.id.value} user={user} />))
          }
        </ul>
      ) : null}
    </>
  )
}

export default ViewUsers;
