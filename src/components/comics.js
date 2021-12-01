import React, { useState, useEffect } from "react";
import ComicItems from "./comicitems";


const Comics = () => {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=c7892065d570218dc353f70b37bdc417&hash=95fdb080804c53fb80014563125748ed')
        .then(response => response.json())
        .then(data => setComics(data.data.results));
    }, [])






    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2>Search Character</h2>
                <form>
                    <input type="text" className="form-control my-3"  />
                </form>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    { comics.map((comic)=> <ComicItems key={comic.id} comic={comic}/>)}
                </div>
            </div>
        </section>
    );
}

export default Comics;