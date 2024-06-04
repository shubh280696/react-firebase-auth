import React from 'react';

const Form = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4">
        <form className=" bg-red-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="block text-gray-900 text-sm font-bold mb-2">Email address</label>
            <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <p className="text-gray-600 text-xs italic">We'll never share your email with anyone else.</p>
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="block text-gray-900 text-sm font-bold mb-2">Password</label>
            <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="exampleInputPassword1" />
          </div>
          <div className="mb-4">
            <input type="checkbox" className="mr-2 leading-tight" id="exampleCheck1" />
            <label className="text-sm text-gray-900" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className=" bg-slate-800 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
      </div>
    </div>
  ); 
}

export default Form;
