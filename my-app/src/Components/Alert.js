import React from 'react'

function Alert(props) {
  // Check if props.alert is defined before accessing its properties
  if (!props.alert || !props.alert.type || !props.alert.msg) {
    return null; // Or render a default message or handle it in another way
  }

  return (
    <div className={`alert alert-${props.alert.type}`} role="alert">
      {props.alert.type} : {props.alert.msg}
    </div>
  );
}

export default Alert