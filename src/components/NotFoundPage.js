import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    Page not found :( <Link to="/">go home</Link>
  </div>
);

export default NotFoundPage;