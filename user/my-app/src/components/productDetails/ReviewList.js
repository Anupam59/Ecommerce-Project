import React, {Component} from 'react';
import axios from "axios";
import ApiUrl from "../../api/ApiURL";

class ReviewList extends Component {

    constructor() {
        super();
        this.state={
            ReviewData:[],
            isLoading:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        let Code = this.props.Code;
        axios.get(ApiUrl.ReviewList(Code)).then(response=>{
            this.setState({ReviewData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }

    render() {

        let MyReviewList = this.state.ReviewData;
        if (MyReviewList.length>0){
            const MyReviewView = MyReviewList.map((ReviewList,i)=>{
                if (ReviewList.reviewer_rating==="1"){
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span>
                            <span className="text-success">
                            <i className="fa fa-star"></i>
                        </span>
                        </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                }
                else if (ReviewList.reviewer_rating==="2"){
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span>
                            <span className="text-success">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                        </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                }
                else if (ReviewList.reviewer_rating==="3"){
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span>
                            <span className="text-success">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                        </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                }
                else if (ReviewList.reviewer_rating==="4"){
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span>
                            <span className="text-success">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                        </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                }
                else if (ReviewList.reviewer_rating==="5"){
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span>
                            <span className="text-success">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                        </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                }
            });
            return (
                <div>
                    <h6 className="mt-2">REVIEWS</h6>
                    {MyReviewView}
                </div>
            );
        }else {
            return (
                <div>
                    <h6 className="mt-2">REVIEWS</h6>
                    <p>...........</p>
                </div>
            );
        }
    }
}

export default ReviewList;