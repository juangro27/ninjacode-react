import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usersService from "../../services/users.service";
import Spinner from "../Spinner/Spinner";
import Modal from "../Modal/Modal";
import UserInformation from "./UserInformation/UserInformation";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getUsers();
    }, []);

    const showUserInformation = (index) => {
        setUserSelected(users[index]);
        setShowModal(true);
    };

    const getUsers = async () => {
        try {
            const res = await usersService.getUsers();
            const { results: users } = res.data;

            setUsers(users);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            {showModal && userSelected && (
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    title="User information"
                    avatar={
                        <img
                            className=" rounded-full text-red-600"
                            src={userSelected.picture.large}
                            alt={`${userSelected.name.first} ${userSelected.name.last} `}
                        />
                    }
                    content={<UserInformation user={userSelected} />}
                />
            )}
            {loading ? (
                <Spinner />
            ) : users.length >= 1 ? (
                <div className="flex flex-col p-20">
                    <div className="overflow-x-auto">
                        <div className="p-1.5 w-full inline-block align-middle">
                            <div className="overflow-hidden border rounded-lg">
                                <table className="w-full divide-y divide-gray-200 ">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                            >
                                                Name
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                            >
                                                Location
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                            >
                                                Email
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                                            >
                                                Phone
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                            >
                                                Details
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {users.map(
                                            (
                                                {
                                                    id,
                                                    name,
                                                    location,
                                                    email,
                                                    phone,
                                                },
                                                index
                                            ) => {
                                                return (
                                                    <tr
                                                        key={
                                                            id.value ||
                                                            name.first
                                                        }
                                                    >
                                                        <td className="px-6 py-4 text-sm text-center  font-medium text-gray-800 whitespace-nowrap">
                                                            {`${name.title}  ${name.first} ${name.last}`}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                                                            {`${location.city}, ${location.country}`}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                                                            {email}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm  text-center font-medium text-gray-800 whitespace-nowrap">
                                                            {`${phone}`}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm   font-medium text-center whitespace-nowrap ">
                                                            <p
                                                                onClick={() =>
                                                                    showUserInformation(
                                                                        index
                                                                    )
                                                                }
                                                                className="cursor-pointer	 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
                                                            >
                                                                More details
                                                            </p>
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="text-center">No results...</h1>
            )}
        </>
    );
};
export default UserList;
