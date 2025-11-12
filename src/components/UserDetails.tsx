import type { IUserData } from "../interfaces";

interface IProps {
  user: IUserData;
}

const UserDetails = ({ user }: IProps) => {
  return (
    <div>
      <h3>{user.username}</h3>
      <h3>{user.email}</h3>
      <h3>{user.address}</h3>
    </div>
  );
};

export default UserDetails;
