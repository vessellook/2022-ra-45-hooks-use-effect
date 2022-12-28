import React from 'react';
import PropTypes from 'prop-types';
import { getDetailsEndpoint } from '../api';
import useJsonFetch from '../hooks/useJsonFetch';
import FixedRatio from './FixedRatio';

const propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const Details = ({ info }) => {
  const { id } = info;
  const [user, loading, error] = useJsonFetch(getDetailsEndpoint(id));

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading || user == null) {
    return <div className="loading">Загрузка...</div>;
  }

  const { name, avatar, details } = user;
  const { city, company, position } = details;

  return (
    <div className="details">
      <FixedRatio ratio={1} color='#ccc'><img className="details__avatar" src={avatar} alt={name} /></FixedRatio>
      <div className="details__field details__field_name">{name}</div>
      <div className="details__field details__field_city">City: {city}</div>
      <div className="details__field details__field_company">
        Company: {company}
      </div>
      <div className="details__field details__field_position">
        Position: {position}
      </div>
    </div>
  );
};

Details.propTypes = propTypes;

export default Details;
