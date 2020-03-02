import React from "react";
import {ScaleLoader} from "react-spinners";
import styled from "styled-components";
import { css } from "@emotion/core";

const override = css`
    width : 300px;
    display : flex;
    justify-content : center;
    align-items : center;
`;

const LoadingSpinner = props => {
    const {isLoading} = props;

    return (
        <ScaleLoader css={override} size={1000} color={"#544B3D"} loading={isLoading}/>
    )
};

export default LoadingSpinner;