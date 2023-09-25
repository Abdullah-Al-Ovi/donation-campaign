import { useRouteError } from "react-router-dom";


const ErrorPAge = () => {
    let error = useRouteError()
    console.log(error);
    return (
        <div className="h-[80vh] flex  border-2 justify-center items-center">
            <div className="text-center space-y-3">
            <h1 className="text-5xl font-extrabold">
                <span className="text-red-900">O</span>
                <span className="text-red-800">o</span>
                <span className="text-red-700">p</span>
                <span className="text-red-600">p</span>
                <span className="text-red-600">s</span>
                <span className="text-red-400">s</span>
                <span className="text-red-300">...</span>
            </h1>
            <h1 className="text-5xl font-extrabold">{error.status}</h1>
            <h1 className="text-5xl font-extrabold">{error.statusText}</h1>
        </div>
        </div>
    );
};

export default ErrorPAge;