import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  // https://www.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_58463744.htm#fromView=keyword&page=1&position=17&uuid=046d79bc-0fef-4933-a3ef-e8908c4c63d5&query=Cartoon+Profile
  //   https://randomuser.me/api/portraits/men/3.jpg
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src="https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">Neo</h3>
          <p className="text-gray-400">neo.@example.com</p>
        </div>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
