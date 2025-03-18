import React from 'react'
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'


const Info = ({ time, place }) => {
    return (
        <div className="info-container">
            {time != null ? (
                <div className="info-wrapper">
                    <FontAwesomeIcon className="icon" icon={faCalendar} />
                    <Typography className="info" variant="body2">{time}</Typography>
                </div>
            ) : null}
            {place != null ? (
                <div className="info-wrapper">
                    <FontAwesomeIcon className="icon" icon={faLocationDot} />
                    <Typography className="info" variant="body2">{place}</Typography>
                </div>
            ) : null}
        </div>
    );
};

export default Info;

export const CompetitionInfo = ({ time, place, placement }) => {
    return (
        <div className="info-container">
            {time != null ? (
                <div className="info-wrapper">
                    <FontAwesomeIcon className="icon" icon={faCalendar} />
                    <Typography className="info" variant="body2">{time}</Typography>
                </div>
            ) : null}
            {place != null ? (
                <div className="info-wrapper">
                    <FontAwesomeIcon className="icon" icon={faLocationDot} />
                    <Typography className="info" variant="body2">{place}</Typography>
                </div>
            ) : null}
            {placement != null ? (
                <div className="info-wrapper">
                    <FontAwesomeIcon className="icon" icon={faMedal} />
                    <Typography className="info" variant="body2">{placement}</Typography>
                </div>
            ) : null}
        </div>
    );
};