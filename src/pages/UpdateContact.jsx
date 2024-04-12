import React from 'react'

const UpdateContact = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="text-white bg-gray-500 flex items-center justify-center w-full">
        <div className="max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Edit contact</h1>
                <p className="mt-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                  ipsa culpa autem, at itaque nostrum!
                </p>
              </div>

              <form className="mx-auto mt-8 mb-8 max-w-md space-y-4 text-black">
              <div>
              <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter full name"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter phone number"
                    />
                    </div>
                  </div>
                <div className="flex items-center justify-between">
                  <button
                    className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpdateContact;
