import React, {Component} from 'react';
import cardPhotoPlaceholder from "../../assets/images/cardPhotoPlaceholder.svg";

class SpecialCollectionPlaceholder extends Component {
    render() {
        let isLoading=this.props.isLoading;
        return (
            <div className={isLoading}>
                <div className="text-center bg-white card-body shadow-sm py-5 BetweenTwoSection">
                    <h4 className="section-title">SPECIAL COLLECTION</h4>
                    <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <div className="row">

                        <div className="col-lg-3 p-0 col-md-3 col-sm-6 col-6">
                            <a href="" className="card image-box h-100  w-100">
                                <img className="w-100" src={cardPhotoPlaceholder}/>
                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-4"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 p-0 col-md-3 col-sm-6 col-6">
                            <a href="" className="card image-box h-100  w-100">
                                <img className="w-100" src={cardPhotoPlaceholder}/>
                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-4"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 p-0 col-md-3 col-sm-6 col-6">
                            <a href="" className="card image-box h-100  w-100">
                                <img className="w-100" src={cardPhotoPlaceholder}/>
                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-4"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 p-0 col-md-3 col-sm-6 col-6">
                            <a href="" className="card image-box h-100  w-100">
                                <img className="w-100" src={cardPhotoPlaceholder}/>
                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-4"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default SpecialCollectionPlaceholder;