interface IProps {
  companyName: string;
  about: string;
  children?: React.ReactNode;
  login: boolean;
  setLogin: (value: boolean) => void;
}

export default function Navbar({
  companyName,
  about,
  children,
  login,
  setLogin,
}: IProps) {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <a href="#">
            <span>{companyName}</span>
          </a>
        </li>
        <li>
          <a href="#">
            {about} {children}
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              // console.log(login);
              setLogin(!login);
            }}
          >
            {login ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
