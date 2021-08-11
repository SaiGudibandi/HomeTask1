import React, {useState} from 'react';
import '../Styles/GenreToggle.css';

function GenreToggle(props) {
    const types = ["All", "Comedy", "Documentaries", "Fiction"];
    const [active, setActive] = useState(types[0]);
    return (
        <div>
            <h2>{props.title}</h2>
            <div className="toggle-group">
                {types.map(type => (
                    <button
                        key={type}
                        className= {`toggle-tab ${active === type ? 'active' : null}`}
                        onClick={() => setActive(type)}>
                        {type}
                    </button>
                ))}
            </div>
            <p>Your selection : {active}</p>
        </div>
    );
};

export default GenreToggle;