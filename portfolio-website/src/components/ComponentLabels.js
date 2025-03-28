import React from 'react'
import { Label } from 'semantic-ui-react'
import "../style/component-labels.css"

const Labels = ({labels}) => {
    <Label>
    </Label>

    return (
        <div className="label-container">
            {labels.map((label, index) => (
                <div class="label" key={index}>{label}</div>
            ))}
        </div>
    );
};

export default Labels;

export const LanguageLabels = ({labels}) => {
    <Label>
    </Label>

    return (
        <div className="language-label-container">
            {labels.map((label, index) => (
                <div class="language-label" key={index}>{label}</div>
            ))}
        </div>
    );
};
