import React from "react";
import { HEADERCOLUMN } from "../../utils/HeaderColumn";

const Portfolio = () => {
    return (
        <>
            <main className="h-screen w-full dark:bg-black dark:text-gray-400">
                <div className="overflow-x-auto pt-4">
                    <table className="overflow-scroll p-4 min-w-min my-auto mx-auto border-solid border-2">
                        <thead className="border-bottom-2">
                            <tr>
                                {HEADERCOLUMN.map((column, key) => (
                                    <th key={key} className="p-3 text-center">
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 text-center">ZOZO</td>
                                <td className="p-3 text-center">200</td>
                                <td className="p-3 text-center">2742</td>
                                <td className="p-3 text-center">3000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default Portfolio;
