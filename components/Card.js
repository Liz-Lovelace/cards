import styles from '../styles/Card.module.css';
import { useState, useContext } from 'react';
import { useDrag } from '@use-gesture/react';
import ModeContext from './ModeContext.js';

function Card(props){
  const {mode, setMode} = useContext(ModeContext);
  const [cardPos, setCardPos] = useState({x: 0, y: 0});
  const bindPos = useDrag((params)=>{
      let newX = params.offset[0];
      console.log(params.offset[0]);
      if (newX < 0)
        newX = 0;
      setCardPos({
        x: newX,
        y: params.offset[1],
      });
    },
      {bounds: {top: 0, left: 0}},
    );
  const [mouseDown, setMouseDown] = useState(false);
  let classes = styles.card;
  if (mode == 'editing_card')
    classes += ' ' + styles.zoom;
  return (
    <div {...bindPos()}
      className={classes}
      style={{
        left: cardPos.x,
        top: cardPos.y,
      }}> 

      mode is {mode}

    </div>
  );
}

export default Card;