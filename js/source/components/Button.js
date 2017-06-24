import className from 'classname';
import React, { PropTypes } from 'react';

function Button(props) {
  const cssclasses = className('Button', props.className);
  return props.href
    ? <a {...props} className={cssclasses} />
    : <button {...props} className={cssclasses} />;
}

Button.propTypes = { href: PropTypes.string };
