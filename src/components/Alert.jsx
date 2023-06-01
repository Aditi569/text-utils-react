import React from 'react'

const Alert = (props) => {

    console.log(props, 5)

    return (
        <div className={`py-2`} style={{ height: '60px' }}>
            {props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong> {props.alert.type} </strong>:{props.alert.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
        </div>
    )
}

// see the harry lecture once it may possible you get any clue harry mein bhi alert mein :- this : aa rha tha usne bhi solve kiya 
export default Alert;