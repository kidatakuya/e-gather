import { Link } from 'react-router-dom';
import './SignupHeader.scss';


function SignupHeader() {
    
    return (
        <header className="signupHeader">
            <Link className="logo" to="/"></Link>
        </header>
    )
}

export default SignupHeader;