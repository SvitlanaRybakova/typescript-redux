import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../customHooks/useTypeSelector';

import {fetchCertainUser} from '../store/action-creators/fetchCertainUser'

const UserPage = () => {
  let { id } = useParams();
  const {loading, error, user} = useTypeSelector((state) => state.certainUser);
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCertainUser(id));
  }, [id]);

  return <div>User page {id}</div>;
};

export default UserPage;
