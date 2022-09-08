import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useDBUser from "../../hooks/UseDBUser";
import Loading from "../../Share/Loading";
import profilePic from "../../../Images/pp/profilePic.jpg";
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
  const [edit, setEdit] = useState(false);
  const [authUser] = useAuthState(auth);
  console.log(authUser);
  const [dbUser, setDbUser] = useState([]);
  useEffect(() => {
    fetch(`https://boxberry.onrender.com/user?email=${authUser?.email}`)
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, [dbUser]);

  // const [dbUser, isLoading, refetch] = useDBUser(authUser?.email);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value || dbUser.name;
    const birthday = e.target.birthday.value || dbUser.birthday;
    const phone = e.target.phone.value || dbUser.phone;
    const sex = e.target.sex.value || dbUser.sex;
    const bio = e.target.bio.value || dbUser.bio;
    const photo = e.target.photo.value || dbUser.photo;
    console.log(name, birthday, phone, sex, bio, photo);
    const updatedProfile = {
      name,
      birthday,
      phone,
      sex,
      bio,
      photo,
    };
    fetch(`https://boxberry.onrender.com/create-user/${dbUser?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Profile Successfully Updated");
        e.target.reset();
        setEdit(false);
        // refetch();
      });
  };

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="w-full md:flex">
      <div className="indicator bg-white rounded mt-10 m-4 w-1/3 h-fit">
        <div className="-mt-6 ">
          {/* <img
            className="mask mask-pentagon indicator-item indicator-center bg-cyan-500 -mt-6 w-40"
            src={dbUser?.photo || profilePic}
            alt=""
          /> */}
          <img
            className=" w-80 h-40 indicator-item indicator-center mask mask-pentagon "
            src={dbUser?.photo || profilePic}
            alt=""
          />
        </div>
        <div className="mt-16 pl-4 w-full">
          <div className="text-left py-8">
            <div className="flex items-baseline justify-between">
              <p className="font-bold w-1/3">Name</p>
              <span className="w-2/3">: {dbUser?.name}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Email</p>
              <span className="w-2/3">: {dbUser?.email}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Birthday</p>
              <span className="w-2/3">: {dbUser?.birthday}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Phone</p>
              <span className="w-2/3">: {dbUser?.phone}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Sex</p>
              <span className="w-2/3">: {dbUser?.sex}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Bio</p>
              <span className="w-2/3">: {dbUser?.bio}</span>
            </div>
          </div>
          <button
            onClick={() => setEdit(true)}
            className="btn text-4xl border-0 w-2/3 my-6"
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {edit && (
        <div className="w-2/3 bg-white rounded m-4 p-4 h-fit">
          <p className="text-2xl font-bold text-cyan-600 border-b-2 inline p-1">
            Update Your Profile
          </p>

          <form onSubmit={handleProfileUpdate}>
            <div className="mt-8">
              <div className="flex gap-4 justify-between">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  <input
                    name="birthday"
                    type="date"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="flex gap-4 justify-between mt-4">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Contact</span>
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Sex</span>
                  </label>
                  <select
                    name="sex"
                    className="select select-sm select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      {dbUser?.sex}
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Common</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 justify-between mt-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Bio</span>
                  </label>
                  <textarea
                    name="bio"
                    type="text"
                    placeholder="Type here"
                    className="textarea textarea-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Profile Picture Link</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Type here"
                  className="input input-sm input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn bg-cyan-500 hover:bg-cyan-600 border-0 my-4"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
