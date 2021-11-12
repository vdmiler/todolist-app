import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BurgerMenu.scss';

import photo from '../../img/photo.png';
import close from '../../img/close.png';

const BurgerMenu = props => {
    return (
        <div className={props.state ? 'menu active' : 'menu'}>
            <div className="menu__content d-flex justify-content-between">
                <div className="menu__leftSide">
                    <a href="https://websters.ru/" className="menu__face">
                        <img src={photo} alt="Vadim Miler" className="menu__img"/>
                        <div className="menu__ellipse"></div>
                    </a>
                    <p className="menu__text">
                        Vadim Miler
                    </p>
                </div>
                <div className="menu__rightSide">
                    <button className="menu__btn" onClick={props.close}>
                        <img src={close} alt="close" className="menu__ico"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu;