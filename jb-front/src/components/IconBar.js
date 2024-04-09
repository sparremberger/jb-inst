// IconBar.jsx
import React from 'react';
import './IconBar.css'; // Import the CSS file for IconBar
import descartavelIcon from '../resources/icons/descartavel.png';
import dispensadorIcon from '../resources/icons/dispensador.png';
import embalagemIcon from '../resources/icons/embalagem.png';
import limpezaIcon from '../resources/icons/limpeza.png';
import lixeiraIcon from '../resources/icons/lixeira.png';
import sacoIcon from '../resources/icons/saco.png';

const IconBar = () => {
    const icons = [
        { title: 'Descartáveis', icon: descartavelIcon },
        { title: 'Dispensadores', icon: dispensadorIcon },
        { title: 'Embalagens', icon: embalagemIcon },
        { title: 'Limpeza', icon: limpezaIcon },
        { title: 'Lixeiras', icon: lixeiraIcon },
        { title: 'Sacos de Lixo', icon: sacoIcon },
    ];

    return (
        <div className="icon-bar">
            {icons.map((item, index) => (
                <div key={index} className="icon">
                    <img src={item.icon} alt={item.title} className="icon-image" />
                    <p className="icon-title">{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default IconBar;
