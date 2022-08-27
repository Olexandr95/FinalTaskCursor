import { Component } from "react";
import Header from "../Header/header";
import c from "./galery-css.module.scss";

export default class Galery extends Component {
  render() {
    const galery = [
      "https://mobimg.b-cdn.net/v3/fetch/a4/a4437326e7b8dedb31340ee1be61224c.jpeg",
      "https://mobimg.b-cdn.net/v3/fetch/8d/8d6acbe75c04d01feaa3e3050840a1f8.jpeg?w=1000&r=0.5625",
      "https://mobimg.b-cdn.net/v3/fetch/22/22c5530bdd43e093cfafe97809ba1616.jpeg?w=1000&r=0.5625",
      "https://mobimg.b-cdn.net/v3/fetch/53/53b572afbabe8df161f8c85761a9ad7e.jpeg?w=1000&r=0.5625",
      "https://mobimg.b-cdn.net/v3/fetch/61/614ee80da937616cc37dd1b290b2a6ff.jpeg?w=1000&r=0.5625",
      "https://mobimg.b-cdn.net/v3/fetch/55/552872da53d124fae35d55cac926abd5.jpeg?w=1000&r=0.5625",
    ];

    return (
      <>
        <Header />
        <div className={c.conteiner}>
          <h1 className={c.title}>Galery</h1>
          <div className={c.galery_box}>
            {galery.map((el, i) => (
              <div key={i}>
                <img className={c.galery_item} src={el} alt={el} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
