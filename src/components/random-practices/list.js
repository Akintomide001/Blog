import React from 'react';

function List(){
    const[names, setNames]= React.useState(["tommy","sticks","coco"])

    return(
        <ul>
            {
                names.map((name)=>(
                    <li>{name}</li>
                )
                    
                )
            }
        </ul>
    )
}
export default List