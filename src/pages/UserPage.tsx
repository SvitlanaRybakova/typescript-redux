import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../customHooks/useTypeSelector';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import { fetchCertainUser } from '../store/action-creators/fetchCertainUser';

const UserPage = () => {
  let { id } = useParams();
  const { loading, error, user } = useTypeSelector(
    (state) => state.certainUser
  );


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCertainUser(id));
  }, [id]);

  const renderTheUserInfo = () => {
    const info = [
      { key: 'street', value: user.address?.street },
      { key: 'suite', value: user.address?.suite },
      { key: 'city', value: user.address?.city },
      { key: 'zipcode', value: user.address?.zipcode },
      { key: 'phone', value: user?.phone },
      { key: 'website', value: user?.website },
      { key: 'company name', value: user.company?.name },
    ];

    return info.map((el) => (
      <tbody>
        <tr>
          <td className='text-gray-500 capitalize'> {el.key}</td>
          <td className='text-gray-600 font-bold ml-1'>{el.value}</td>
        </tr>
      </tbody>
    ));
  };
  return (
    <>
      {loading && <div>loading</div>}
      {error && <div>{error}</div>}
      {user && (
        <div className='flex flex-col justify-center h-screen'>
          <div className='relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white'>
            <div className='w-full md:w-1/3 bg-white grid place-items-center'>
              <img
                src='https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='tailwind logo'
                className='rounded-xl'
              />
            </div>
            <div className='w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3'>
              <div className='flex justify-between item-center'>
                {/* username */}
                <div className='flex items-center'>
                  <FaRegUser
                    size={16}
                    className='text-gray-500 font-normal mr-1'
                  />
                  <span className='text-gray-500 font-normal'>username:</span>
                  <p className='text-gray-600 font-bold text-sm ml-1'>
                    {user.username}
                  </p>
                </div>
                {/* ./username */}

                {/* email */}
                <div className='flex items-center'>
                  <HiOutlineMail
                    size={20}
                    className='text-gray-500 font-normal mr-1'
                  />
                  <span className='text-gray-500 font-normal'>email:</span>
                  <p className='text-gray-600 font-bold text-sm ml-1'>
                    {user.email}
                  </p>
                </div>
                {/* ./email */}
              </div>

              <h3 className='font-black text-gray-800 md:text-3xl text-xl'>
                {user.name}
              </h3>
              <div className='text-gray-500 my-0 text-base italic'>
                {user?.company?.catchPhrase}
              </div>

              <table className='table-auto'>{renderTheUserInfo()}</table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPage;
