import React, { Fragment } from 'react';

export interface ShowMoreSpinnerLoadProps {
    isLoading: boolean;
    loaderSize: number;
}
const ShowMoreSpinnerLoad = (props: ShowMoreSpinnerLoadProps) => {

    return (
        <div className="show-more-spinner-loader" style={{ fontSize: props.loaderSize }}>

            {
                props.isLoading ?
                    <Fragment>
                        <div className="loader-wrapper">
                            <div className="loader"></div>
                        </div>
                            <p>&nbsp;&nbsp;CARICA ALTRI</p>
                    </Fragment>
                    : <Fragment>
                        <p>CARICA ALTRI</p>
                    </Fragment>
            }

        </div>
    )
}

export default ShowMoreSpinnerLoad;