interface IProps {
  setLogin: (value: boolean) => void;
  userData: IUserData;
  setUserData: (data: IUserData) => void;
}

interface IUserData {
  username: string;
  email: string;
  password: string;
  address: string;
}

export default function LoginForm({ setLogin, userData, setUserData }: IProps) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    console.log({ ...userData });
  };

  return (
    <>
      <div>
        <h3>Email: {userData.email}</h3>
        <h3>Password: {userData.password}</h3>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={onChangeHandler}
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={onChangeHandler}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={onChangeHandler}
          />
          <br />
          <br />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={onChangeHandler}
          />
          <br />
          <br />
          <button type="button" onClick={() => setLogin(true)}>
            Login
          </button>
        </div>
      </form>
    </>
  );
}
