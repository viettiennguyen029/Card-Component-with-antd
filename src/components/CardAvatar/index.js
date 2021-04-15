import React from 'react';

export default function CardAvatar(props) {
    return (
        <div style={{ width: props.width - 16, height: props.width - 16, display: "flex", justifyContent: "center" }}>
            <img alt="example"
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                src="https://lh3.googleusercontent.com/URCDbMI_Rn1Iit-ELcQAMC7y9DCbf1NbnOu3zxZDcbn8d7kYgSAZKFRI9cvJWJMS3UwLY1kQhniU8kt-tuNzErQKOw=s0" />
        </div>
    );
}

