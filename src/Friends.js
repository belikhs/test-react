import React, {Component} from "react";

    const Friends = ({name, age, city})=> {
        return (
            <>
                <h3>{name}</h3>
                <h4>{age}</h4>
                <h5>{city}</h5>
            </>
        )
    }
export default Friends