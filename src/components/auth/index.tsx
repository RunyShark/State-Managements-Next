import React from 'react';
import { login } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export const Auth = () => {
  const { isLogin, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onClick = () =>
    dispatch(login({ correo: 'corero@correro', name: 'Test' }));

  return (
    <div>
      {isLogin && (
        <>
          <p className="text-white">{`User: ${user?.name}`}</p>
          <p className="text-white">{`Correro: ${user?.correo}`}</p>
        </>
      )}

      <button
        type="button"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-5 mb-5"
        onClick={onClick}
      >
        login
      </button>
    </div>
  );
};
