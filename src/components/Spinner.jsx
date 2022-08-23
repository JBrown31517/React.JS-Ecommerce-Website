import React, { useState } from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = () => {
  const override = css`
    display: block;
    margin: 3rem auto;
    border-color: #6dead1;
  `;

  let [loading] = useState(true);
  let [color] = useState('#6DEAD1');

  return (
    <div>
      <div className="sweet-loading">
        <ClipLoader color={color} loading={loading} css={override} size={150} />
      </div>
    </div>
  );
};

export default Spinner;
