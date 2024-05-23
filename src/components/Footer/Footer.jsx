import React from 'react'
import style from './footer.module.css'
const Footer = ({logo, text, icons, head1, text1, text2, text3, text4, text5, text6, text7, head2, text8, text9, text10, text11, text12, text13, text14, img1, img2, img3, img4, head3}) => {
  return (
    <div className={style.footerContent}>
        <div className={style.bistroLogo}>
           <img src={logo} alt="" />
           <p>{text}</p>
           <img src={icons} alt="" />
        </div>

        <div className={style.bistroPages}>
          <div className={style.pages}>
          <h4>{head1}</h4>
            <ul>
                <li>{text1}</li>
                <li>{text2}</li>
                <li>{text3}</li>
                <li>{text4}</li>
                <li>{text5}</li>
                <li>{text6}</li>
                <li>{text7}</li>
            </ul>
          </div>

          <div className={style.pages}>
          <h4>{head2}</h4>
            <ul>
                <li>{text8}</li>
                <li>{text9}</li>
                <li>{text10}</li>
                <li>{text11}</li>
                <li>{text12}</li>
                <li>{text13}</li>
                <li>{text14}</li>
            </ul>
          </div>

        </div>

        <div className={style.followUs}>
        <h4>{head3}</h4>
            <div>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            <div>
                <img src={img3}alt="" />
                <img src={img4}alt="" />
            </div>
        </div>

    </div>
  )
}

export default Footer