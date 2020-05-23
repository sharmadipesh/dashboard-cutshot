import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-style-container d-flex align-items-center justify-content-between">
                <div className="title-text">
                    Dashboard
                </div>
                
                <div className="select-width">
                    <select
                        name="Language"
                        className="form-control select-option"
                    >
                        <option value="English">English</option>
                    </select>
                </div>
            </div> 
        );
    }
}

export default Header;


{/* <div className="header-style-container d-flex align-items-center justify-content-between">
                <div className="title-text">
                    Dashboard
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <select
                            name="Language"
                            className="form-control select-option"
                        >
                            <option value="English">English</option>
                        </select>
                    </div>
                </div>
            </div> */}

            // <div className="header-style-container">
            //     <div className="row">
            //         <div className="col-11 d-flex align-items-center">
            //             <div className="title-text">
            //                 Dashboard
            //             </div>
            //         </div>
            //         <div className="col-1">
            //             <select
            //                 name="Language"
            //                 className="form-control select-option"
            //             >
            //                 <option value="English">English</option>
            //             </select>
            //         </div>
            //     </div>
            // </div>