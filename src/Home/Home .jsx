import React from 'react'
import style from './Home.module.css'

 const Home  = () => {
    return (
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.imgcontainer}>
                <img src="/terse pics.jpg" alt="profile picture" />
                </div>
                <div className={style.text}>
                <h2>Okeke Chidera</h2>
                  <p>Lagos Nigeria</p>
                  <p >"frontend developer and "</p>
                </div>
                <div className={style.btn}>
                  <button onClick={() => window.open("https://github.com/Tersemajesty", "_blank")}>Github</button>
                  <button onClick={() => window.open("https://www.linkedin.com/in/okeke-chidera1/", "_blank")}>Linkedln</button>
                  <button onClick={() => window.open("https://x.com/Tersemajesty200", "_blank")}>Twitter</button>
                  <button onClick={() => window.open("https://www.frontendmentor.io/profile/Tersemajesty", "_blank")}>Frontend mentor</button>
                  <button onClick={() => window.open("https://www.instagram.com/terse3938/?hl=en", "_blank")}>instagram</button>
                </div>
            </div>
        </div>
    )
}
export default Home