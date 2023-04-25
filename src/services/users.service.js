import axios from "axios";

class UsersService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
        });
    }

    getUsers() {
        return this.api.get(`?results=5&noinfo`);
    }
}

const usersService = new UsersService();
export default usersService;
