import './about.css'
import cssLogo from './image/css.jpeg'
import htmlLogo from './images/html.jpeg'
import jsLogo from './images/java.jpeg'
import javaLogo from './images/javaa.jpeg'
import reactLogo from './images/react.jpeg'
import nodeLogo from './images/node.jpeg'
import tailLogo from './images/tailwind.jpeg'
import youLogo from './images/youtube.jpeg'

function about(){


    return (
        <section>
            <h1>Who am I</h1>
            <p> My name is Okusanya ifeoluwa. I hail from ijebu-ode,<br />
                Ogun state,Graduated from Ijebu-ode Grammar school <br />
                 and currently studying computer science in olabisi <br />
                 onabanjo university, Ago-Iwoye, Ogun state.I'm a <br />
                 passionate developer with a strong interest in web <br />
                 development, machine learning, and graphics designing.
                I'm always eager to learn new technologies and expand <br />
                my skill set.</p> <br />
                <img src={profile} alt="profile picture"/>
                <div>
                    <button> Download Portfolio </button>
                </div>
                <h2>Technologies i use</h2>
                <ul className='tech'>
                    <li><img src={cssLogo} alt=" css" /></li>
                    <li><img src={htmlLogo} alt="html" /></li>
                    <li><img src={jsLogo} alt="js" /></li>
                    <li><img src={javaLogo} alt="java" /></li>
                    <li><img src={reactLogo} alt="react" /></li>
                    <li><img src={nodeLogo} alt="node" /></li>
                    <li><img src={tailLogo} alt="tailwind" /></li>
                    <li><img src={youLogo} alt="youtube" /></li>

                </ul>

        </section>
    )
}
export default about