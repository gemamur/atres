import React from "react";

interface Props {
    children: React.ReactNode;
}

export const BodyContainerLayout:React.FC<Props> = ({children}) => {

    return(<>
    <div className="container">
        <div className="body-padding">
            {children}
        </div>
    </div>
    </>)
}