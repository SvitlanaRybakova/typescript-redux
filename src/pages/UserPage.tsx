import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';

import { useActions } from '../customHooks/useActions';
import { useTypeSelector } from '../customHooks/useTypeSelector';

import Map from '../components/Map';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

interface IInfo {
  key: string;
  value: string;
}

const UserPage = () => {
  let { id } = useParams();
  const {
    loading,
    error,
    user,
  } = useTypeSelector((state) => state.certainUser);

  const { fetchCertainUser } = useActions();

  useEffect(() => {
    fetchCertainUser(id);
  }, [id]);

  if (error) return <Error errorText={error} />;
  if (loading) return <Spinner />;

  const renderTheUserInfo = () => {
    const info: IInfo[] = [
      { key: 'street', value: user.address?.street },
      { key: 'suite', value: user.address?.suite },
      { key: 'city', value: user.address?.city },
      { key: 'zipcode', value: user.address?.zipcode },
      { key: 'phone', value: user?.phone },
      { key: 'website', value: user?.website },
      { key: 'company name', value: user.company?.name },
    ];

    return info.map((el) => (
      <tbody key={uuidv4()}>
        <tr>
          <td className='text-gray-500 capitalize'> {el.key}</td>
          <td className='text-gray-600 font-bold ml-1'>{el.value}</td>
        </tr>
      </tbody>
    ));
  };
  return (
    <>
      {user && (
        <div className='flex flex-col justify-center h-screen'>
          <div className='relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-7xl md:min-w-[60rem] mx-auto border border-white bg-white'>
            <div className='w-full md:w-1/2 bg-white grid place-items-center'>
              <Map
                location={{
                  lat: 10.99835602,
                  lng: 77.01502627,
                }}
                zoomLevel={17}
              />
            </div>
            <div className='bg-white flex flex-col space-y-2 p-3'>
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
