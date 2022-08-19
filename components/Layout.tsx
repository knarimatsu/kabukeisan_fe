import { type } from "os";

type AppLayoutProps = {
    children: React.ReactNode;
}

export const Layout = ({children}:AppLayoutProps) => {
    return(
        <div>
            {children}
        </div>
    );
};
