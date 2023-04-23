import { type NextPage } from "next";
import { PropsWithChildren } from "react";

import TreesMap from "./components/treesMap";

const Home: NextPage = () => {
    return (
        <main>
            <TreesMap />
        </main>
    );
};

export default Home;
