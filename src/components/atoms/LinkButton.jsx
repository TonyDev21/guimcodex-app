import { Link } from 'react-router-dom';

const LinkButton = ({ to, text, className = '' }) => {
  return (
    <Link
      to={to}
      className={`btn ${className}`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;