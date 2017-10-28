import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from './Button';

// offer has:
// company name
// salary the way the user gave it
// hourly salary for our purposes
// duration in weeks
// location (city, state)
// corporate housing
// housing stipend (0 if not there)
// meals responsible per week
// flight/relocation cost: maybe not
// transportation: maybe not

class Offer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="offer">
                <div className="offer-title">{this.props.info.companyName}</div>
                <div className="offer-field">Salary: {this.props.info.salaryFormat}</div>
                <div className="offer-field">Duration: {this.props.info.duration}</div>
                <div className="offer-field">Location: {this.props.info.location}</div>
                <div className="offer-field">Corporate Housing Offered: {this.props.info.corporateHousing}</div>
                <div className="offer-field">Housing Stipend: {this.props.info.housingStipend}</div>
                <div className="offer-field">Meals Responsible per Week: {this.props.info.meals}</div>
                <Button text="Edit" handleClick={() => {
                    this.props.editHandler(this.props.info.cuid);
                }} />
            </div>
        );
    }
}

export default Offer;

Offer.propTypes = {
    info: PropTypes.object.isRequired,
    editHandler: PropTypes.func.isRequired,
};