import UserListPage from "./pages/UserListPage/UserListPage";

function App() {
    const styles = {
        minHeight: "calc(100vh - 64px)",
    };

    return (
        <div className="App">
            <div style={styles}>
                <UserListPage />
            </div>
        </div>
    );
}

export default App;
