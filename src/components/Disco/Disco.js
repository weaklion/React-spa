import React, { Component } from "react";
import styles from "./Disco.scss";
import classNames from "classnames/bind";
import spotify from "../../icon/spotify.svg";
import amazon from "../../icon/amazon.svg";
import apple from "../../icon/apple.svg";
import christmas from "../../image/album/SIA_Everyday-is-christmas.jpg";
import acting from "../../image/album/sia-this-is-acting.jpg";
import fear from "../../image/album/sia-1000-forms-of-fear.jpg";
import born from "../../image/album/we-are-born.jpg";
import people from "../../image/album/Sia_Some-People-Have-Real-Problems.jpg";
import colour from "../../image/album/Sia_Colour-The-Small-One.jpg";
import healing from "../../image/album/Sia_Healing-Is-Difficult.jpg";
import onlysee from "../../image/album/Sia_Only-See.jpg";
const cx = classNames.bind(styles);

class Disco extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={cx("fake-box")}>
        <div className={cx("Content-box")}>
          <header className={cx("Content-title")}>
            <h2> Discogrphy </h2>
          </header>
          <section className={cx("Content-album")}>
            <a href="https://www.youtube.com/watch?v=Tk1gOvttCWU&list=PL8NsSbKCJoAQkEaxwUf2QKvqgtX0dnSPf">
              <img className={cx("album-cover")} src={christmas} alt="" />
            </a>
            <ul className={cx("SNS_ul")}>
              <li>
                <a href="https://open.spotify.com/playlist/05T1KuTCkjxifLHkawRNVX">
                  <img
                    src={spotify}
                    alt="spotify"
                    className={cx("SNS_image")}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/dp/B076JD3MVG?tag=smarturl-pivot-20">
                  <img src={amazon} alt="amazon" className={cx("SNS_image")} />
                </a>
              </li>
              <li>
                <a href="https://itunes.apple.com/kr/album/everyday-is-christmas/1299289839?app=itunes&ign-mpt=uo%3D4">
                  <img src={apple} alt="apple" className={cx("SNS_image")} />
                </a>
              </li>
            </ul>
          </section>
          <section className={cx("Content-album")}>
            <a href="https://www.youtube.com/watch?v=KrT_0J6m6y8&list=PLqXyY-frZDHAt3U1aePVdUxaaHPeJtQA_">
              {" "}
              <img className={cx("album-cover")} src={acting} alt="" />{" "}
            </a>
            <ul className={cx("SNS_ul")}>
              <li>
                <a href="https://open.spotify.com/album/2eV6DIPDnGl1idcjww6xyX">
                  <img
                    src={spotify}
                    alt="spotify"
                    className={cx("SNS_image")}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/This-Acting-Deluxe-Version-Sia/dp/B01LY3YH7J?&_encoding=UTF8&tag=sonbmgmusent-20&linkCode=ur2&linkId=81e2b063955960182d8611440b68a5bc&camp=1789&creative=9325">
                  <img src={amazon} alt="amazon" className={cx("SNS_image")} />
                </a>
              </li>
              <li>
                <a href="https://itunes.apple.com/us/album/this-is-acting-deluxe-version/id1162482526?app=itunes">
                  <img src={apple} alt="apple" className={cx("SNS_image")} />
                </a>
              </li>
            </ul>
          </section>
          <section className={cx("Content-album")}>
            <a href="https://www.youtube.com/watch?v=2vjPBrBU-TM&list=PLKcjQYbNPwDXzrzSrcYpHqSCWsHgOEwSY">
              {" "}
              <img className={cx("album-cover")} src={fear} alt="" />
            </a>
            <ul className={cx("SNS_ul")}>
              <li>
                <a href="https://open.spotify.com/album/6FdNvoO5sF4EKwCX9je1MH">
                  <img
                    src={spotify}
                    alt="spotify"
                    className={cx("SNS_image")}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/1000-Forms-Fear-Deluxe-Version/dp/B00WRY203M/ref=sr_1_1?ie=UTF8&qid=1490630236&sr=8-1&keywords=1000+forms+of+fear+deluxe">
                  <img src={amazon} alt="amazon" className={cx("SNS_image")} />
                </a>
              </li>
              <li>
                <a href="https://itunes.apple.com/kr/album/1000-forms-of-fear-deluxe-version/989874359?app=itunes&ign-mpt=uo%3D4">
                  <img src={apple} alt="apple" className={cx("SNS_image")} />
                </a>
              </li>
            </ul>
          </section>
          <section className={cx("Content-album")}>
            <a href="https://www.youtube.com/watch?v=iSryDRs3xyM&list=PLf00TcDbXOniL36YX8esZ9GCOMV8SvfRC">
              {" "}
              <img className={cx("album-cover")} src={born} alt="" />
            </a>
            <ul className={cx("SNS_ul")}>
              <li>
                <a href="https://open.spotify.com/album/55vXDESMdISZiIBL1GMsWr">
                  <img
                    src={spotify}
                    alt="spotify"
                    className={cx("SNS_image")}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/We-Are-Born-Sia/dp/B003MWHVLY">
                  <img src={amazon} alt="amazon" className={cx("SNS_image")} />
                </a>
              </li>
              <li>
                <a href="https://itunes.apple.com/us/album/we-are-born/id365337098?mt=1&app=music">
                  <img src={apple} alt="apple" className={cx("SNS_image")} />
                </a>
              </li>
            </ul>
          </section>
          <section className={cx("Content-album")}>
            <a href="https://www.youtube.com/watch?v=BlrkYL9XwP8&list=PLX__LGFxQqHSWwZQqqKSx4SdQoN-f1C6i">
              {" "}
              <img className={cx("album-cover")} src={people} alt="" />
            </a>
            <ul className={cx("SNS_ul")}>
              <li>
                <a href="https://open.spotify.com/album/5LLfszqKA9xMdnqMKyn11i">
                  <img
                    src={spotify}
                    alt="spotify"
                    className={cx("SNS_image")}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Some-People-Have-Real-Problems/dp/B0010DJ1VA">
                  <img src={amazon} alt="amazon" className={cx("SNS_image")} />
                </a>
              </li>
              <li>
                <a href="https://itunes.apple.com/us/album/some-people-have-real-problems/id270714547?mt=1&app=music">
                  <img src={apple} alt="apple" className={cx("SNS_image")} />
                </a>
              </li>
            </ul>
          </section>
          <section className={cx("Content-album")}>
            <a href="https://www.youtube.com/watch?v=fW-cPSCMfE0&list=PLeOe_IhHbkS2qJ2d2BsiWfP_gfH9PHthh">
              <img className={cx("album-cover")} src={colour} alt="" />
            </a>
            <ul className={cx("SNS_ul")}>
              <li>
                <a href="https://open.spotify.com/album/6uVUKJgirfLpW20hCk9cwb?play=true&utm_source=open.spotify.com&utm_medium=open">
                  <img
                    src={spotify}
                    alt="spotify"
                    className={cx("SNS_image")}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Colour-Small-One-Sia/dp/B000CNDIZE">
                  <img src={amazon} alt="amazon" className={cx("SNS_image")} />
                </a>
              </li>
              <li>
                <a href="https://itunes.apple.com/us/album/colour-small-one-deluxe-edition/id1096929725?mt=1&app=music">
                  <img src={apple} alt="apple" className={cx("SNS_image")} />
                </a>
              </li>
            </ul>
          </section>
          <section className={cx("Content-album")}>
            <a href="https://www.youtube.com/watch?v=t1tI58ilnzU&list=PLFu58c63KEDT_IUorfFaJ7B6jn_vx-KIp&index=1">
              <img className={cx("album-cover")} src={healing} alt="" />
            </a>
            <ul className={cx("SNS_ul")}>
              <li>
                <a href="https://open.spotify.com/album/0v1UhTkwjhmUYOFotlws6c?play=true&utm_source=open.spotify.com&utm_medium=open">
                  <img
                    src={spotify}
                    alt="spotify"
                    className={cx("SNS_image")}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.amazon.ca/Healing-Difficult-1-Sia/dp/B000066SE7">
                  <img src={amazon} alt="amazon" className={cx("SNS_image")} />
                </a>
              </li>
              <li>
                <a href="https://itunes.apple.com/us/album/healing-is-difficult-10th/id851277422?mt=1&app=music">
                  <img src={apple} alt="apple" className={cx("SNS_image")} />
                </a>
              </li>
            </ul>
          </section>
          <section className={cx("Content-album")}>
            <img className={cx("album-cover")} src={onlysee} alt="" />
            <ul className={cx("SNS_ul")} />
          </section>
        </div>
      </div>
    );
  }
}

export default Disco;
