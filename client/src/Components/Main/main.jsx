import React from "react";
import { Component } from "react";
import Header from "../Header/header";
import m from "./main-css.module.scss";

export default class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={m.main}>
          <h1 className={m.title}>Main Page</h1>
          <div className={m.content}>
            <div className={m.content_box}>
              <div className={m.img1}></div>
              <h2 className={m.title}>
                SAGA CHRONICLES: SKYWALKER SOUND’S DANIELLE DUPRE AND JON
                BORLAND ON THEIR OBI-WAN KENOBI JOURNEY
              </h2>
              <p className={m.parag}>
                Some of the greatest Star Wars stories are those from behind the
                scenes. In Saga Chronicles, Lucasfilm’s Lucas Seastrom tells
                those tales.In a remote village, Obi-Wan Kenobi and young
                Princess Leia seek refuge in a hideout used for smuggling Jedi.
                But Darth Vader and his fearsome Inquisitors are on their trail.{" "}
              </p>
            </div>
            <div className={m.content_box}>
              <div className={m.img2}></div>
              <h2 className={m.title}>
                MEET THE TEAMS BUILDING A BETTER FUTURE WITH STAR WARS: FORCE
                FOR CHANGE
              </h2>
              <p className={m.parag}>
                BUILD THE FUTURE POWERED BY STAR WARS: FORCE FOR CHANGE BROUGHT
                TOGETHER TENACIOUS TEAMS TO TACKLE THE PROBLEMS OF TODAY FOR A
                BETTER TOMORROW.{" "}
              </p>
            </div>
            <div className={m.content_box}>
              <div className={m.img3}></div>
              <h2 className={m.title}>
                BOSSK SNEAKS ABOARD IN MARVEL’S STAR WARS: HALCYON LEGACY #5 –
                EXCLUSIVE PREVIEW
              </h2>
              <p className={m.parag}>
                THE BOUNTY HUNTER INTERRUPTS A PLEASURE CRUISE TO REMIND A
                TRAVELER ABOUT HIS UNPAID DEBT.{" "}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
