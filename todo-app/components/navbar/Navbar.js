import styles from "./Navbar.module.css";
const Navbar = ({ users, getUserData, getUserTasks, setUserModal }) => {
  const handleInputChange = async e => {
    getUserData({ variables: { findUserByIdId: e.target.value } });
    getUserTasks({ variables: { userId: e.target.value } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h3 className={styles.title}>ToDo List</h3>
        </div>
        <div className={styles.center}>
          <div className={styles.searchContainer}>
            <select
              className={styles.select}
              onChange={e => handleInputChange(e)}
            >
              <option default>Select User</option>
              {users.findAllUsers.map(user => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.button} onClick={() => setUserModal(true)}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
