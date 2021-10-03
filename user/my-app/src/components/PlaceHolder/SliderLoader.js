import React, {Component, Fragment} from 'react';
class SliderLoader extends Component {
    render() {
        let isLoading=this.props.isLoading;
        return (
            <div className={isLoading}>
                <div className="ph-item TopSection">
                    <div className="ph-col-12">
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                        </div>
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderLoader;
