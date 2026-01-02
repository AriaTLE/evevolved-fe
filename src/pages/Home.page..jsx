import {useMantineColorScheme} from "@mantine/core";
import { NavBar } from "../components/NavBar";
import {Welcome} from "../components/Welcome";

export function HomePage() {
    const { setColorScheme } = useMantineColorScheme();

    setColorScheme('dark');
    return (
        <>
            <NavBar />
            <Welcome />
        </>
    );
}
