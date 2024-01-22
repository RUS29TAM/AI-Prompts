'use client';
import {SessionProvider} from "next-auth/react";
import {ReactElement} from "react";

interface IProvider {
    children?: ReactElement[],
    session?: any,
}
const Provider = ({children, session}: IProvider) => {
    console.log(children)
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
};

export default Provider;