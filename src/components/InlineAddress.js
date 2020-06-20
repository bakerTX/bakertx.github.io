import React from 'react';

const InlineAddress = () => {
  const email = 'aaronbaker9210@gmail.com';
  return (
    <address className="inline-address">
      <a href={`mailto:${email}`}>{email}</a>
    </address>
  );
};

export default InlineAddress;
