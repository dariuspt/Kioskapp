import { useParams } from "react-router-dom";

const UserMenu = () => {
  const { id } = useParams();
  return (
    <div>{id} User Menu</div>
  )
}

export default UserMenu