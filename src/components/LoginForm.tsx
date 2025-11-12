import { formInputList } from "../data";
import type { IUserData } from "../interfaces";

interface IProps {
  setLogin: (value: boolean) => void;
  userData: IUserData;
  setUserData: (data: IUserData) => void;
}

export default function LoginForm({ setLogin, userData, setUserData }: IProps) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // handlers
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    console.log({ ...userData });
  };

  // renders
  const renderFormInputs = formInputList.map((input) => (
    <div key={input.id}>
      <label htmlFor="{input.id}">{input.label}:</label>
      <input
        type={input.type}
        id={input.id}
        name={input.name}
        value={userData[input.name]}
        onChange={onChangeHandler}
      />
      <br />
      <br />
    </div>
  ));

  return (
    <>
      <div>
        <h3>Email: {userData.email}</h3>
        <h3>Password: {userData.password}</h3>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          {renderFormInputs}
          <button type="button" onClick={() => setLogin(true)}>
            Login
          </button>
        </div>
      </form>
    </>
  );
}
