import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => (
    ReactDOM.createPortal(
        children,
        document.getElementById('App')
    )
);

export default ModalPortal;