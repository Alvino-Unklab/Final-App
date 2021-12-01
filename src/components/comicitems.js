import React from "react";
import { Link } from 'react-router-dom';

const ComicItems = (props) => {
    return(
    <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src={props.comic.thumbnail.path+"/portrait_fantastic."+props.comic.thumbnail.extension} alt={props.comic.title} />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.comic.name}</h5>
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="/more">More Info</Link></div>
            </div>
        </div>
    </div>
    );
}

export default ComicItems;