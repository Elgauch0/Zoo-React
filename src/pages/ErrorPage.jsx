import { useRouteError } from "react-router";

function ErrorPage() {
    const error = useRouteError() || { message: 'Unknown Error' };
   

    return (
        <>
            <div>ErrorPage: there was an error</div>
            <pre>{error.message}</pre>
        </>
    );
}

export default ErrorPage;

