import React from 'react';
import { ButtonLink,Title } from "./styles"

export default function Button(props) {

    const { title,icon, onClick,disabled } = props;

    return (
        <ButtonLink onClick={onClick} disabled={disabled}>
            <Title> {title} </Title>
            <img src={icon} alt="" />
        </ButtonLink>

    );

}
