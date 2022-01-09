/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    /* !は逆の意味 */
    setFaceShowFlag(!faceShowFlag);
  };
  /* useEffectの第二引数は配列をとることができる 配列の中には変更される関数を入れ、その関数のみ関心を持たせる(処理の関心分離)*/
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        /* ||は左側がfalseの時に右辺を実行 */
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON / OFF</button>
      <p>{num}</p>
      {/* &&は「かつ」と読む　左辺がtrueの時に右辺を返す */}
      {faceShowFlag && <p>(*‘∀‘)</p>}
    </>
  );
};

export default App;
