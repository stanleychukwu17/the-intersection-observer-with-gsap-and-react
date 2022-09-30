// import { gsap } from 'gsap';

import './app.scss';

// importing of assets
import back from '../../assets/back3.svg'
import msg from '../../assets/msg3.svg'
import hero from '../../assets/hero.jpg'

const App = () => {

    return (
        <div className="AppMain">
            <div className="TopBar">
                <div className="TopBar__icon"><img src={back} alt="" /></div>
                <div className="TopBar__hd">Summer Time</div>
                <div className="TopBar__icon"><img src={msg} alt="" /></div>
            </div>
            <div className="hero-section">
                <div className=""><img src={hero} alt="" /></div>
            </div>
            <div className="MidCvr">
                <div className="GName">Stanley Chukwu</div>
                <div className="GText">
                    Commodo velit aliqua quis in voluptate. Eu dolor dolor proident consectetur quis ea quis eiusmod exercitation ad dolor consequat. Exercitation ex deserunt magna Lorem. Minim pariatur do occaecat esse elit. Minim laboris do quis ullamco excepteur et mollit sit exercitation.
                    In sint nisi duis duis ex. Excepteur nisi ipsum magna reprehenderit excepteur adipisicing non anim magna exercitation esse aliqua. Incididunt veniam esse ullamco cillum fugiat sunt ex. Nostrud eiusmod nulla irure proident duis culpa proident. Qui amet mollit eiusmod non consequat amet nisi nulla tempor culpa irure occaecat dolor.
                    Ad ipsum officia dolor voluptate dolor officia irure labore ex. Sunt cillum qui elit officia eu. Laboris amet qui amet veniam. Est nostrud pariatur officia nulla ex. Esse cupidatat aliqua proident laboris veniam veniam ipsum.
                    Ad ipsum officia dolor voluptate dolor officia irure labore ex. Sunt cillum qui elit officia eu. Laboris amet qui amet veniam. Est nostrud pariatur officia nulla ex. Esse cupidatat aliqua proident laboris veniam veniam ipsum.
                    Ad ipsum officia dolor voluptate dolor officia irure labore ex. Sunt cillum qui elit officia eu. Laboris amet qui amet veniam. Est nostrud pariatur officia nulla ex. Esse cupidatat aliqua proident laboris veniam veniam ipsum.
                </div>
            </div>
            <div className="LastCvr">
                <div className="GName">Summer time in Ukraine is fun with endless activities</div>
                <div className="GText">
                    Commodo velit aliqua quis in voluptate. Eu dolor dolor proident consectetur quis ea quis eiusmod exercitation ad dolor consequat. Exercitation ex deserunt magna Lorem. Minim pariatur do occaecat esse elit. Minim laboris do quis ullamco excepteur et mollit sit exercitation.
                    In sint nisi duis duis ex. Excepteur nisi ipsum magna reprehenderit excepteur adipisicing non anim magna exercitation esse aliqua. Incididunt veniam esse ullamco cillum fugiat sunt ex. Nostrud eiusmod nulla irure proident duis culpa proident. Qui amet mollit eiusmod non consequat amet nisi nulla tempor culpa irure occaecat dolor.
                    Ad ipsum officia dolor voluptate dolor officia irure labore ex. Sunt cillum qui elit officia eu. Laboris amet qui amet veniam. Est nostrud pariatur officia nulla ex. Esse cupidatat aliqua proident laboris veniam veniam ipsum.
                    Ad ipsum officia dolor voluptate dolor officia irure labore ex. Sunt cillum qui elit officia eu. Laboris amet qui amet veniam. Est nostrud pariatur officia nulla ex. Esse cupidatat aliqua proident laboris veniam veniam ipsum.
                    Ad ipsum officia dolor voluptate dolor officia irure labore ex. Sunt cillum qui elit officia eu. Laboris amet qui amet veniam. Est nostrud pariatur officia nulla ex. Esse cupidatat aliqua proident laboris veniam veniam ipsum.
                    Commodo velit aliqua quis in voluptate. Eu dolor dolor proident consectetur quis ea quis eiusmod exercitation ad dolor consequat. Exercitation ex deserunt magna Lorem. Minim pariatur do occaecat esse elit. Minim laboris do quis ullamco excepteur et mollit sit exercitation.
                    In sint nisi duis duis ex. Excepteur nisi ipsum magna reprehenderit excepteur adipisicing non anim magna exercitation esse aliqua. Incididunt veniam esse ullamco cillum fugiat sunt ex. Nostrud eiusmod nulla irure proident duis culpa proident. Qui amet mollit eiusmod non consequat amet nisi nulla tempor culpa irure occaecat dolor.
                    Ad ipsum officia dolor voluptate dolor officia irure labore ex. Sunt cillum qui elit officia eu. Laboris amet qui amet veniam. Est nostrud pariatur officia nulla ex. Esse cupidatat aliqua proident laboris veniam veniam ipsum.
                </div>
                <div className="GBtn">
                    <button>$ Book your summer now</button>
                </div>
            </div>

        </div>
    )
}
export default App;