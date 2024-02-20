import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../../pages";

const Public:React.FC = () => {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
        </Routes>
    );
};

export {Public};
