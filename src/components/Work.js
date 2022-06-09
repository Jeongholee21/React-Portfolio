import React from "react";
import '../styles/Work.css'

function Work() {
    return (
    <section className="work">
        <nav id="work"><h2>Work</h2></nav> 
        <div className="workbox">

            <button id="workboxbtn"> <a href="https://jeongholee21.github.io/weather-dashboard/"> 
            <img src={require("../styles/images/weather.jpg")} /> 
                <section className="details">
                    <h4> Weather Forcaster </h4>
                    <p >Deployed Page: https://schristinelagrange.github.io/lifePlanner/ </p>
                </section></a>
            </button>

            <button id="workboxbtn"> <a href="https://jeongholee21.github.io/work-day-scheduler/index.html"> 
                <img src={require("../styles/images/scheduler.jpg") } />
                <section className="details">
                    <h4> Workday Scheduler </h4>
                    <p >Deployed Page: https://jeongholee21.github.io/work-day-scheduler/index.html/ </p>
                </section></a>
            </button>

            <button id="workboxbtn"> <a href="https://big-sexy-recipes.herokuapp.com/"> 
        <img src={require("../styles/images/recipe.jpg")} />
                <section className="details">
                <h4>Sexy Recipes</h4>
                <p >Deployed Page: https://big-sexy-recipes.herokuapp.com/ </p>
            </section> </a>
            </button>  
        </div>
    </section>
);
}

export default Work;