import Layout from '../../components/Blog/Layout';

const UserProfile = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow">
          Update Profile
        </button>
      </form>
    </Layout>
  );
};

export default UserProfile;
