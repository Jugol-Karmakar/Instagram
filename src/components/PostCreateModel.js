import React from "react";
import { CgClose } from "react-icons/cg";
import boy from "../images/boy.jpg";

const PostCreateModel = ({ open, onClose }) => {
  if (!open) return null;

  const handelPostShare = (e) => {
    e.preventDefault();

    const photo = e.target.photo.value;
    const caption = e.target.caption.value;
    const location = e.target.location.value;

    const post = {
      photo,
      caption,
      location,
    };
    console.log(post);
  };

  return (
    <div>
      <div className="relative z-10">
        <div className="fixed inset-0 bg-[#050505] bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex h-full max-h-[515px] justify-center p-10 text-center">
            <div className="w-full max-w-3xl relative transform overflow-hidden rounded-lg bg-[#121212] text-left shadow-xl transition-all">
              <div className="py-3 border-b border-b-gray-700">
                <div className="relative text-center ">
                  <h3 className="text-lg font-medium">Create new post</h3>
                  <CgClose
                    onClick={onClose}
                    className="text-white text-2xl absolute top-1 right-3 cursor-pointer"
                  />
                </div>
              </div>

              {/* info image  */}

              <div>
                <form
                  onSubmit={handelPostShare}
                  className="grid grid-cols-[450px_minmax(320px,_1fr)_10px]"
                >
                  <div className="flex flex-col items-center bg-white shadow-md dark:bg-gray-800">
                    <div className="w-full h-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          name="photo"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  {/* info */}
                  <div className="p-4">
                    <div className="flex items-center">
                      <img class="w-10 h-10 rounded-full" src={boy} alt="" />
                      <h5 className="text-lg font-bold text-white ml-3">
                        Jugol Karmakar
                      </h5>
                    </div>
                    <div className="my-2">
                      <textarea
                        className="w-full block pt-2 pb-24 outline-none bg-[#121212] placeholder:focus:text-white mb-2"
                        type="text"
                        name="caption"
                        placeholder="Write a caption..."
                      />
                      <input
                        className="w-full py-2 outline-none bg-[#121212] placeholder:focus:text-white mt-4"
                        type="text"
                        name="location"
                        placeholder="Add location"
                      />
                    </div>
                    <div className="flex justify-end mt-14">
                      <input
                        className="bg-blue-600 px-4 py-1 rounded-2xl cursor-pointer"
                        type="submit"
                        value="Share"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreateModel;
