import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate()
    const user =useLoaderData();
    const {name} = user;

    const handleGoBack =() => {
        navigate(-1)
    }

    return (
        <div>
            <h2>Details about user: {name}</h2>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;