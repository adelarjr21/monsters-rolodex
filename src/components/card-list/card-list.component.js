import React from 'react';

import { Card } from '../card/card.component'

import './card-list.style.css';

export const CardList = props => (
    <div>
        <h2 className="card-list">
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </h2>
    </div>
)