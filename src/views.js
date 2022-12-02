import Button from './button.js'
import {Size} from './helpers.js';

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export function Welcome(props) {
    const lineStyle={
        ...FLEX_BASE,
        alignItems: 'center',
        justifyContent: 'center',

    }

    const plusStyle={
        color: 'red',
        fontSize: '48pt',
        marginLeft: '15px',
        fontWeight: 'bold',
        marginBottom: '10px',
    }
    return <div><h2>Welcome to</h2><h1 style={lineStyle}>Grade My <span style={plusStyle}>+</span>eacher</h1></div>
}

export function Auth(props) {
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
    }
    return <div><span style={linkStyle} onClick={()=>props.changeView('login')}>Log In</span> or <span style={linkStyle} onClick={()=>props.changeView('register')}>Register</span></div>
}

export function Login(props) {
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
    }
    return <div><h1>Sign In</h1><UserForm type="login" next="welcome" changeView={props.changeView} /></div>
}

export function Register(props) {
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
    }
    return <div><h1>Register</h1><UserForm  type="reg" next="rev1" changeView={props.changeView}/></div>
}

export function UserForm(props){

    const revSty={
        ...FLEX_BASE,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50px',
    }

    const rowContSty = {
        ...FLEX_BASE,
        flexDirection: 'column',
        width: '400px',
        marginBottom: '10px',
        marginBottom: '25px',
    }

    const rowSty = {
        ...FLEX_BASE,
        flexDirection: (size.width<600)?'column':'row',
        marginBottom: '10px',
        width: '100%',
    }

    const headSty = {
        fontWeight: 'bold',
        marginRight: '8px',
        marginBottom:  (size.width<600)?'5px':'0',
    }

    const inputSty = {
        width: '173px',
        height: '20px',
        marginBottom:  (size.width<600)?'10px':'0',
    }
    
    const searchSty = {
        marginLeft: '5px'
    }

    return  <div style={revSty}>
                <div style={rowContSty}>
                    {(props.type==='reg')
                        ?   <div style={rowSty}>
                                <label style={headSty}>Name</label>
                                <input style={inputSty} type="text"></input>
                            </div>
                        : null
                    }

                    <div style={rowSty}>
                        <label style={headSty}>Username (use email):</label>
                        <input style={inputSty} type="text"></input>
                    </div>
                    <div style={rowSty}>
                        <label style={headSty}>Password</label>
                        <input type='password' style={inputSty}></input>
                    </div>
                 </div>
                 <Button text='Go' next={props.next} changeView={props.changeView} />
            </div>
}

export function Thanks(props) {
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
    }
    return <div>
                <h1>Thank you for Leaving a Review!</h1>
                <div style={linkStyle} onClick={()=>props.changeView('profile')}>Go to Teacher Profile</div>
            </div>
}