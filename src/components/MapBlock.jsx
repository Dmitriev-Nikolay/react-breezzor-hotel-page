import React from 'react';

import { GoogleMap } from '../components';

const MapBlock = () => {
    
    return (
        <section className="maps-block content">
            <div className="maps-block__title">
                <h3 className="sub-headling">Местоположение:</h3>
            </div>
            <div className="maps-block__info paragraph">
                Описание как добраться до пляжа sectetur adipiscing elit. Porttitor ultricies non, sem aliquam, 
                pharetra, urna. Feugiat diam cras lorem sodales risus risus, enim. Tempor rhoncus at massa tempor 
                egestas tristique etiam amet. 
            </div>
            <GoogleMap />
        </section>
    );
};

export default MapBlock;
