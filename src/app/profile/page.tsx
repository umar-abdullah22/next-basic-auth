'use client';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-800">John Doe</h2>
          <p className="text-gray-600 mb-4">johndoe@example.com</p>
          <p className="text-center text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae odio interdum tincidunt.
          </p>
        </div>
        <div className="flex justify-around">
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
