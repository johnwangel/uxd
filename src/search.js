import React, {useState} from 'react';
import {Size} from './helpers.js'
import {Smith,Math} from './profile_data.js'

const colors = {
    copper: '#be7434',
    lblue: '#5dabf4',
    dblue: '#4775a0',
    gray: '#434343'
}

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export function SearchResults(props){
    
 const pd=(props.which==1)?Smith:Math

 return <div>
            <h1>Search Results</h1>
            {pd.map((prof,key)=><Result key={key} index={`${props.which}:${key}`} pd={prof} changeView={props.changeView}/>)}
        </div>
}

export function Result(props) {

    const [hovering,changeHover] = useState(false);

    const profileSty = {
        padding: '25px 0 0',
        cursor: 'pointer',
    }

    const profSty = {
        ...FLEX_BASE,
        border: `5px solid ${colors.dblue}`,
        padding: '10px',
    }

    const profHover = {
        ...profSty,
        border: `5px solid ${colors.copper}`,
    }

    const profInfo = {
        ...FLEX_BASE,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '5px',
    }

    const gradeInfo = {
        ...profInfo,
        alignItems: 'center',
    }

    const profName = {
        fontWeight: 'bold',
        paddingBottom: '10px',
        fontSize: '24pt',
        color: colors.copper,
        marginTop: '5px',
    }

    const grade = {
        fontSize: '36pt',
        color: 'red',
        padding: '15px 0',
        fontWeight: 'bold',
    }

    const addInfo = {
        ...FLEX_BASE,
        alignItems: 'flex-end',
        padding: '25px',
        border: `5px solid ${colors.dblue}`,
        borderTop: 'none',
    }

    const addButton = {
        ...FLEX_BASE,
        justifyContent: 'center',
        backgroundColor: colors.dblue,
        color: 'white',
        width: '200px',
        height: '50px',
        cursor: 'pointer',
    }

    const heartSty = {
        fontSize: '36pt',
        cursor: 'pointer',
    }

    const revHd = {
        width: '100%',
        backgroundColor: colors.dblue,
        color: 'white',
        padding: '20px 0',
        margin: '0'
    }

    const repLink = {
        textDecoration: 'underline',
        fontSize: '10pt',
    }

    const imgSty = {
        height: '150px',
    }

    const courseLink = {
        textDecoration: 'underline',
        cursor: 'pointer',
        zIndex: '10',
    }

    return  <div style={profileSty}>
                <div onMouseEnter={()=>changeHover(true)} 
                    onMouseLeave={()=>changeHover(false)}
                    style={(hovering)?profHover:profSty}>
                    <img style={imgSty} onClick={ ()=>props.changeView('profile',props.index) } src={`${process.env.PUBLIC_URL}/img/${props.pd.image}`} />
                    <div style={profInfo}>
                        <div onClick={ ()=>props.changeView('profile',props.index) } style={profName}>{props.pd.name}</div>
                        <div>{props.pd.role} of <span style={courseLink} onClick={()=>props.changeView('search2')}>{props.pd.dept}</span> at {props.pd.inst}</div>
                    </div>
                    <div style={gradeInfo}>Average Grade: <span style={grade}>{props.pd.avg}</span> based on {props.pd.count} reviews</div>
                </div>
            </div>
}