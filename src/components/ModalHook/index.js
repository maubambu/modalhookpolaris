import React, {useState} from 'react';

const ModalHook = ({ toggle, content }) => {
    const [isShown, setIsShown] = useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);

    return (
        <>
        {toggle(show)}
        {isShown && content(hide)}
        </>
    );
};

export default ModalHook;