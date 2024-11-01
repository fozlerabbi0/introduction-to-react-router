
const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <p>{error.statusText || error.massage}</p>
        </div>
    );
};

export default ErrorPage;