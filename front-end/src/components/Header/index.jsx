import React from 'react'
import './index.css'

export default function Header() {
    const estilo = {
        textTransform: 'uppercase'
    }
    return (
        <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">

            <h4 style={{ estilo }} className="label">Bom Caracter </h4>
        </div>
    );
}

