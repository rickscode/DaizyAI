import React from 'react';
import PropTypes from 'prop-types';

const ClickableLink = ({ url }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <a href={url} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {url}
    </a>
  );
};

ClickableLink.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ClickableLink;
