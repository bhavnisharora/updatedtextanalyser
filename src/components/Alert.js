import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={'{props.alert.type} alert-box'} role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
  </div>
  )
}

// alert alert-{props.alert.type} alert-dismissible fade show