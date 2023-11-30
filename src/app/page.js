import React from "react";
import Navbar from "./Navbar";
// import "./globals.css"

const page = () => {

    const backgroundImageStyle = {
   
    // height:'50%'
    // minHeight: '100vh', // Set a minimum height for the container, e.g., to fill the viewport

    
  };
  return (
    <div >
      <Navbar />

      <div className="md:w-[70%] sm:w-[100%] m-auto h-auto p-5 ">
        <div className="flex p-2 bg-gray-200 lg:rounded-full lg:w-[60%] ">
          <div className="hidden md:block">
            <button className="bg-red-800 border-gray-200 p-3 text-white p-2 rounded-full w-20">
              Alert
            </button>
          </div>
          <div className="ml-4 mt-3">
            <a href="">Learn how the prescription drug law impacts Medicare.</a>
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}

        <div className="rounded p-2  mt-2 sm:w-[100%] bgImg" style={backgroundImageStyle}>
          <div className="md:w-[25%] sm:w-[100%] ">
            <p className="text-lg text-white w-[60%]">its Open Enrollment-now to Dec 7</p>
            <button  className=" text-[#1E3C70] hover:bg-white-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">
              Find Plans
            </button>
          </div>

          <div className="flex  mt-10">
            <div className="w-[50%] sm:w-[50% ] md:ml-20">
              <img
                width="100%"
                src={"/drImg.png"}
              />
            </div>

            <div className="w-[50%] sm:w-[50%] md:mt-20 sm:mt-1 md:mr-20 ">
              <h1 className="text-center md:text-3xl text-lg">Welcome</h1>
              <h1 className="text-center md:text-3xl text-lg">to</h1>
              <h1 className="text-center md:text-3xl text-lg">
                United Healthcare
              </h1>
              <div className="w-[80%]  m-auto bg-[#54ABE5]">
                <p className="text-center text-white p-3 hidden lg:block">
                  Get Started with United Healthcare
                </p>
                <p className="text-center text-white p-3 block lg:hidden">
                  Get Started
                </p>
              </div>
            </div>
          </div>

          {/* <Image src={} wit/> */}

          <div className="md:flex gap-10  m-auto mt-8 ">
            <div className="md:w-[20%] md:h-[20%] sm:w-[100%] ml-2 p-2 shadow-md bg-white rounded border p-4">
              <h2>Login in or create an account</h2>
              <p>Access your information anytime, anywhere</p>

              <div className="w-[90%] m-auto bg-[#54ABE5]">
                <p className="text-center text-white p-3">
                  Log in/ Create Account
                </p>
              </div>
            </div>
            <div className="md:w-[20%] md:h-[20%] sm:w-[100%] p-2 shadow-md bg-white rounded border p-4 chacha">
              <h2>Login in or create an account</h2>
              <p>Access your information anytime, anywhere</p>
              <div className="w-[90%] m-auto bg-[#54ABE5]">
                <p className="text-center text-white p-3">
                  Log in/ Create Account
                </p>
              </div>
            </div>
            <div className="md:w-[20%] md:h-[20%] sm:w-[100%] p-2 shadow-md bg-white rounded border p-4 chacha">
              {" "}
              <h2>Login in or create an account</h2>
              <p>Access your information anytime, anywhere</p>
              <div className="w-[90%] m-auto bg-[#54ABE5]">
                <p className="text-center text-white p-3">
                  Log in/ Create Account
                </p>
              </div>
            </div>
            <div className="md:w-[20%] md:h-[20%] sm:w-[100%] p-2 shadow-md bg-white rounded border p-4 chacha">
              {" "}
              <h2>Login in or create an account</h2>
              <p>Access your information anytime, anywhere</p>
              <div className="w-[90%] m-auto bg-[#54ABE5]">
                <p className="text-center text-white p-3">
                  Log in/ Create Account
                </p>
              </div>
            </div>
          </div>
          {/* -----------------------------------------------------------------?\ */}
          <div className="md:flex mt-10">
            <div className="w-[100%] md:w-[45%] h-auto p-4 sm:p-0 md:ml-20">
              <iframe
                className="rounded sm:w-[100%]"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8-usUHa1KjQ"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className="md:w-[55%] h-auto p-4">
              <div className="md:ml-2  p-4 md:mt-20  rounded border w-[100%] md:w-[80%]">
                <h2>Its Open Enrollment - now to Dec 7</h2>
                <p>Find and compare 2024 health and drug plans now.</p>

                <div className="w-[80%] bg-[#54ABE5]">
                  <p className="text-center text-white p-3 ">Find Plans</p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ border: "solid 2px  grey" }}
            className="border-t border-gray-300 mt-4 mb-4"
          ></div>
          <div className="md:flex mt-10">
            <div className="w-[100%] md:w-[45%] h-auto p-4 sm:p-0 md:ml-20">
              <img
                className="rounded sm:w-[100%]"
                width="100%"
                height="100%"
                src="https://www.medicare.gov/sites/default/files/styles/16_9_713x401/public/initiative-closeup.jpg.webp?itok=yBajkQwM"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div className="md:w-[55%] h-auto p-4">
              <div className="md:ml-2  p-4 md:mt-20  rounded border w-[100%] md:w-[80%]">
                <h2>Get help with prescription drug costs</h2>
                <p>
                  Starting January 1,2024, people with limited resources can
                  qualify for even more savings on Medicare drug costs (Part D).
                  Find out if you qualify and how much you can save.
                </p>

                <div className="w-[80%] bg-[#54ABE5]">
                  <p className="text-center text-white p-3 ">
                    Learn About Extra Help
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ border: "solid 2px  grey" }}
            className="border-t border-gray-300 mt-4 mb-4"
          ></div>

          <div className="md:flex">
            <div className="w-[100%] md:w-[45%] h-auto p-4 sm:p-0 md:ml-20">
              <img
                className="rounded sm:w-[100%]"
                width="100%"
                height="100%"
                src="https://www.medicare.gov/sites/default/files/styles/16_9_713x401/public/julyhmpg-initiative.jpg.webp?itok=QG2XvtpH"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div className="md:w-[55%] h-auto p-4">
              <div className="md:ml-2  p-4 md:mt-20  rounded border w-[100%] md:w-[80%]">
                <h2>Lower costs for Medicare-covered insulin</h2>
                <p>
                  The cost of a one month supply of each Part B- and Part
                  D-covered insulin is capped at $35, and you do not have to pay
                  a deductible for insulin.
                </p>
                <div className="w-[80%] bg-[#54ABE5]">
                  <p className="text-center text-white p-3 ">
                    Learn About Insulin Savings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex mt-20">
            <div className="md:w-[55%] sm:w-[100%] h-auto p-2 mt-20">
              <div className="ml-2 p-4 mt-2  rounded border w-[]">
                <h2>Get important news & updates</h2>
                <p>
                  Get reminders about open enrollment, ways to save costs, and
                  more.
                </p>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    ENTER YOUR EMAIL ADDRESS
                  </label>
                  <input
                    className="h-10 w-90 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                    placeholder="name@example.com"
                  />

                  <div class="flex items-center">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="w-7 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checked-checkbox" className="ms-2 text-sm ">
                      By checking this box, you consent to our{" "}
                      <a href="">data privacy policy.</a>
                    </label>
                  </div>
                </div>

                <div className="md:w-[30%] bg-[#54ABE5]">
                  <p className="text-center text-white p-3 ">Next Step</p>
                </div>
              </div>
            </div>

            <div className="md:w-[45%] h-auto p-2">
              <img
                className="rounded"
                width="100%"
                height="100%"
                src="https://www.medicare.gov/sites/default/files/styles/hero_image_775/public/Cleveland-emailguy.png.webp?itok=tdocaxtF"
                frameborder="0"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------footer---------------------------------------------------------------------- */}

      <div className="bg-gray-100 w-full h-auto">
        <div
          style={{ border: "solid 1px  grey", marginTop: "2%" }}
          className=" w-[60%] m-auto mt-10 border-t border-gray-300 mt-4 mb-4"
        ></div>

        <div className="w-[60%] m-auto h-[50%] md:flex flex-row gap-10">
          <div className="ml-10 p-4">
            <h4>Site Menu</h4>
            <p>Find care</p>
            <p> What Medicare covers</p>
            <p>Drug coverage (Part D)</p>
            {/* <p> Supplements & other insurance</p>
            <p>Claims & appeals</p>
            <p>Manage your health</p>
            <p>Site map</p> */}
          </div>
          <div className="ml-10 p-4">
            <h4>Take Action</h4>
            <p>Find health & drug plans</p>
            <p>Find care providers</p>
            <p>Find medical equipment & suppliers</p>
            <p>Find a Medicare Supplement Insurance (Medigap) policy</p>
            {/* <p>Find publications</p>
            <p>Talk to someone</p>
            <p>Manage your email preferances</p>
            <p>Get information in other languages </p> */}
          </div>
          <div className="ml-10 p-4">
            <h4>CMS & HHS Websites</h4>

            <p>HealthCare.gov</p>

            <p>InsureKidsNow.gov</p>
            <p>Medicaid.gov</p>
            <p>CMS.gov</p>
            {/* `` */}
          </div>
        </div>

        <div
          style={{ border: "solid 1px  grey"}}
          className=" md:w-[60%] m-auto mt-10 border-t border-gray-300 mt-4 mb-4"
        ></div>

        <div className="flex flex-row-reverse gap-10 h-10 w-[60%] m-auto">
          <div className="w-[20%]">
            <img style={{ width: "50px" }} src="/fbIcon.svg" />
          </div>
          <div>
            <img style={{ width: "55px" }} src="/twitter.svg" />
          </div>
          <div>
            {" "}
            <img style={{ width: "60px" }} src="/youtube.svg" />
          </div>
        </div>

        <div
          style={{ border: "solid 1px  grey", }}
          className=" md:w-[60%] m-auto mt-10 border-t border-gray-300 mt-5 mb-4"
        ></div>

        <div className="md:w-[60%] m-auto md:flex">
          <div>
            <h1>United HealthCare</h1>
          </div>

          <div>
            <p>
              A federal government website managed and paid for by the U.S.
              Centers for Medicare and Medicaid Services. 7500 Security
              Boulevard, Baltimore, MD 21244
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;




// import React from 'react'
// // import "./globals.css"

// const page = () => {

//   const backgroundImageStyle = {
//     backgroundImage: 'url(/full.png)',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     minHeight: '100vh', // Set a minimum height for the container, e.g., to fill the viewport

    
//   };

//   return (
//     <div className='chachaa' style={backgroundImageStyle}>page</div>
//   )
// }

// export default page