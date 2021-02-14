import React, { Component } from 'react';
import './loading.scss';

import Loader from "react-loader-spinner";

export default function loading(){
    return (
        <Loader
            type="Circles"
            color="#fff"
            className="loading"
        />
    )
}