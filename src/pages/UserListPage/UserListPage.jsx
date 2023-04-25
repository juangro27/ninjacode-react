import UserList from "../../components/UserList/UserList";

const UserListPage = () => {
    const styles = {
        minHeight: "calc(100vh - 64px)",
    };
    return (
        <div
            style={styles}
            className="h-full flex flex-col justify-center items-center"
        >
            <h1 className="text-5xl text-center	font-bold text-white">
                Users list
            </h1>
            <UserList />
        </div>
    );
};
export default UserListPage;
