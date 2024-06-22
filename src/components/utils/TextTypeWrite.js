import React, { useEffect, useState } from "react";

const TextTypeWrite = ({ toRotate, timeHide = 0 }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const periodDeleteText = 1500;
  const periodAddText = 150; /* - Math.random() * 100; */

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(periodAddText / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(periodDeleteText);
    } else if (isDeleting && updatedText === "") {
      if (timeHide && timeHide > 0) {
        setDelta(timeHide);
        setIsDeleting(false);
        setTimeout(() => {
          setLoopNum(loopNum + 1);
          setDelta(periodAddText);
        }, timeHide);
      } else {
        setLoopNum(loopNum + 1);
        setDelta(periodAddText);
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="animation-wrapper ">
      <span className="txt-rotate">
        <span className="wrap">{text}</span>
      </span>
    </div>
  );
};

export default TextTypeWrite;
