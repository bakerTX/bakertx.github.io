import React from 'react';

const Codepens = () => {
  const iframeStyles = {
    width: 300,
    height: 300,
    margin: 5,
  };
  return (
    <>
      <iframe height="265" style={iframeStyles} scrolling="no" title="Monster Battle" src="https://codepen.io/bakerTX/embed/KyJjEm?height=265&theme-id=dark&default-tab=result" frameBorder="no" allowtransparency="true" allowFullScreen="true">
        See the Pen
        {' '}
        <a href="https://codepen.io/bakerTX/pen/KyJjEm">Monster Battle</a>
        {' '}
        by Aaron Baker
        (
        <a href="https://codepen.io/bakerTX">@bakerTX</a>
        ) on
        <a href="https://codepen.io">CodePen</a>
        .
      </iframe>

      <iframe height="265" style={iframeStyles} scrolling="no" title="Emoji picker" src="https://codepen.io/bakerTX/embed/jOPVLob?height=265&theme-id=dark&default-tab=result" frameBorder="no" allowtransparency="true" allowFullScreen="true">
        See the Pen
        {' '}
        <a href="https://codepen.io/bakerTX/pen/jOPVLob">Emoji picker</a>
        {' '}
        by Aaron Baker
        (
        <a href="https://codepen.io/bakerTX">@bakerTX</a>
        ) on
        <a href="https://codepen.io">CodePen</a>
        .
      </iframe>

      <iframe height="265" style={iframeStyles} scrolling="no" title="input shake on error" src="https://codepen.io/bakerTX/embed/WNvOZwg?height=265&theme-id=dark&default-tab=result" frameBorder="no" allowtransparency="true" allowFullScreen="true">
        See the Pen
        {' '}
        <a href="https://codepen.io/bakerTX/pen/WNvOZwg">input shake on error</a>
        {' '}
        by Aaron Baker
        (
        <a href="https://codepen.io/bakerTX">@bakerTX</a>
        ) on
        <a href="https://codepen.io">CodePen</a>
        .
      </iframe>
    </>
  );
};

export default Codepens;
