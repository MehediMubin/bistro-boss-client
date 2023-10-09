import errorImage from "../assets/404.gif";

const ErrorPage = () => {
    return (
        <div>
            <img className="mx-auto" src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;
