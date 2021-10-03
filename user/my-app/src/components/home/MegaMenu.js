import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";

class MegaMenu extends Component {

    constructor(props) {
        super();
    }

    MenuItemClick=(event)=>{
        event.target.classList.toggle("active");
        let panel = event.target.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+ "px";
        }
    }


    render() {

        const MyList = this.props.data;

        const MyView = MyList.map((ParentList,i)=>{
            return <div key={i.toString()}>
                <button onClick={this.MenuItemClick} className="accordion"> <img className="accordionMenuIcon" src={ParentList.ParentCategoryImg}/>   {ParentList.ParentCategoryName}</button>
                <div className="panel">
                    <ul>
                        {
                            (ParentList.SubCategory).map((ChildList,i)=>{
                                return <li key={i.toString()}>
                                    <Link className="text-decoration-none" to={"ProductListSubCategory/"+ParentList.ParentCategoryName+"/"+ChildList.cat2_name} className="accordionItem">{ChildList.cat2_name}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        })

        return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside menuTop">
                    {MyView}
                </div>
            </div>
        );
    }
}

export default MegaMenu;