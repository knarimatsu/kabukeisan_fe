import { useRouter } from "next/router";
import Button from "./Button";

const Card =(
    {
        title,
        description,
        path
    }:{
        title: string,
        description: string
        path: string
    }
) => {
    const router = useRouter();
    function toPage() {
        router.push(`/${path}`);
    }
    return(
        <div
            className="p-6 bg-white rounded-lg m-10 border-inherit shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>
            <div className="flex justify-center">
                <Button title={title} color='primary' onClick={toPage}/>
            </div>
        </div>
    );
};

export default Card;