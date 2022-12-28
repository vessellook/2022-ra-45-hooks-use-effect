import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  chosenUser: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ]),
  onChoose: PropTypes.func,
};

const List = ({ users, chosenUser, onChoose }) => {
  const children = users.map((user) => (
    <li
      key={user.id}
      className={classNames('user', {
        user_chosen: chosenUser != null && chosenUser.id === user.id,
      })}
      onClick={() => onChoose?.(user)}
    >
      {user.name}
    </li>
  ));

  return <ul className="users">{children}</ul>;
};

List.propTypes = propTypes;

export default List;
