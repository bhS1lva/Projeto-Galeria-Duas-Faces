import { Link } from "react-router-dom";
import { ReactComponent as InstaLogo } from 'src/assets/icons/instagram.svg';

import './Frame.css';

export default function Frame({src, isMiniature}) {
  
  const styles = isMiniature?[
    "box",
    "infos",
    "instagramLogoMini",
    "miniFrame"
  ]:[
    "exhibitionBox",
    "exhibitionInfo",
    "instagramLogo",
    "mainFrame"
  ]
  
  return (
    <div className={styles[0]}>
      <div className={styles[1]}>
        <h1>{src.exhibiName}</h1>
        <a href={src.artistSocial} target="_blank" rel="noreferrer">
          <InstaLogo className={styles[2]}/>
          <h2>{src.artist}</h2>
        </a>
      </div>
      <div>
        <Link className={styles[3]} to={`/artistas/${src.artistPageName}`}>
          <p>{src.frames[0].frameName}</p>
          <img src={src.frames[0].frameSrc} alt={`${src.artist} frame entitled ${src.frames[0].frameName}`}/>
        </Link>
      </div>
    </div>
  )
}
