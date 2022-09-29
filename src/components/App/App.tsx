// import { gsap } from 'gsap';

import './app.scss';

// importing of assets
import back from '../../assets/back-icon.svg'
import msg from '../../assets/msg-icon.svg'
import hero from '../../assets/hero.jpg'

const App = () => {

    return (
        <div className="AppMain">
            <div className="TopBar">
                <div className=""><img src={back} alt="" /></div>
                <div className="">Intersection</div>
                <div className=""><img src={msg} alt="" /></div>
            </div>
            <div className="hero-section">
                <img src={hero} alt="" />
            </div>
        </div>
    )
}
export default App;