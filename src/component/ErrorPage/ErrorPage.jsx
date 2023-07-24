import { useRouteError } from "react-router-dom";
import img from '../../assets/photo/error.jpg'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="container mx-auto items-center text-center my-20 p-20 rounded">
            <div>
                <h1 className=" text-3xl mb-2 font-medium">Oops!</h1>
                <img className=" mx-auto w-[400px] mb-2" src={img} alt="" />
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}