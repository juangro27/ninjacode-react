const UserInformation = ({ user }) => {
    return (
        <>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Title: </strong>
                    {user.name.title}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>First Name: </strong>
                    {user.name.first}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Last name: </strong>
                    {user.name.last}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Gender: </strong>
                    {user.gender}
                </p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Nationality: </strong>
                    {user.nat}
                </p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Date of Birth:</strong>{" "}
                    {new Date(user.dob.date).toLocaleDateString()}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Email: </strong>
                    {user.email}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Cell: </strong>
                    {user.cell}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Phone: </strong>
                    {user.phone}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Street:</strong>
                    {` ${user.location.street.number} ${user.location.street.name}
                                                        `}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Postcode: </strong>
                    {user.location.postcode}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>City: </strong>
                    {user.location.city}
                </p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>State: </strong>
                    {user.location.state}
                </p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>Country: </strong>
                    {user.location.country}
                </p>
            </div>
        </>
    );
};

export default UserInformation;
