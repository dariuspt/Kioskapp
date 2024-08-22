import { useParams } from "react-router-dom";

const AdminMenu = () => {
  const { id } = useParams();
  return <div>{id}Admin</div>;
};

export default AdminMenu;
