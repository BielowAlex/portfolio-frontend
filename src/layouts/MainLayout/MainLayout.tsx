import React, {ReactNode} from 'react';

type Props = {
    children: ReactNode
}

const MainLayout:React.FC<Props> = ({children}) => {
    return (
        <div style={{width: "100%", minHeight:"100%"}}>
            <h1>ASDASDASDASDASDSAD</h1>
            <div>
                {children}
            </div>
        </div>
    );
};

export {MainLayout};
