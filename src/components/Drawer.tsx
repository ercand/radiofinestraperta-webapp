import React from "react";
import { AiFillCloseCircle } from "react-icons/ai"

type Props = {
    isOpen: boolean;
    /** callback function passed to the onClick handler*/
    onClick: () => void;
    onClickMenu: (index: string) => void;
}

const Drawer: React.FC<Props> = ({ onClick, onClickMenu, isOpen }) => {
    return (
        <div className={`drawer ${isOpen ? "open" : ""}`}>
            <div className="menu">
                <ul>
                    <li onClick={() => { onClickMenu("/")}}>Home</li>
                    <li onClick={() => { onClickMenu("/palinsesto") }}>Palinsesto</li>
                    <li onClick={() => { onClickMenu("/podcasts") }}>Podcast</li>
                </ul>
            </div>
            <div className="close-button">
                <AiFillCloseCircle onClick={onClick} size="64" />
            </div>
        </div>
    );
}

export default Drawer;