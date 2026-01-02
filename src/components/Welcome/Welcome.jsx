import {Anchor, Button, Modal, Text, Title} from '@mantine/core';
import classes from './Welcome.module.css';
import {useDisclosure} from "@mantine/hooks";
// import {InfiniteScroll} from "@/components/InfiniteScroll/InfiniteScroll";

export default function Welcome() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Title className={classes.title} ta="center" mt={100}>
                <br />
                A New TYPE of Social<br /> Coming Soon

            </Title>
            <center>This site is first dedicated to all the officers who have lost their lives.</center>
        </>
    );
}
