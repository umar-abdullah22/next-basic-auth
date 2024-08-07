'use client';

export default function UserPage({params}: any) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          
          
        </div>
        <div className="flex justify-around">
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200">
            Edit Profile of id {params.id}
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
