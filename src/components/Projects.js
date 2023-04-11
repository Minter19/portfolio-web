import React from "react";
import Image from "next/image";
function Projects() {
  return (
    <>
      {/* Project Section */}
      <div id="project-section" className="w-100 h-[500px] container mx-auto p-4 mb-3 relative">
        <h3 className="py-3 text-2xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          <span className="underline tracking-wider">&nbsp;My Projects </span>
        </h3>
        <div className="md:flex md:flex-nowrap gap-3 w-100 h-[calc(100%-25px)]">
          <div className="md:w-1/4 rounded-xl overflow-hidden text-center conter border-2 border-sky-600 p-1 shadow-lg my-2 hover:scale-95 hover:border-4 transition-all">
            <Image
              src={"/assets/projects/landingpage.png"}
              alt="landingpage"
              width={500}
              height={500}
              className="h-[calc(100%-10rem)] w-full aspect-auto] rounded-lg"
            />
            <div className="flex flex-col min-h-[10rem] justify-center gap-2">
              <h4 className="mt-2 font-bold text-lg">
                Landing Page Migas Data Repository |{" "}
                <span className="text-xs font-thin">(on progress)</span>
              </h4>
              {/* <p>Soon Launching Public</p> */}
              <p className="text-sm">2023</p>
              <p className="text-sm">
                Built with NextJS, Strapi CMS, Bootstrap
              </p>
            </div>
          </div>

          <div className="md:w-1/4 rounded-xl overflow-hidden text-center border-2 border-sky-600 p-1 shadow-lg my-2 hover:scale-95 hover:border-4 transition-all">
            <Image
              src={"/assets/projects/multipledownload.png"}
              alt="landingpage"
              width={500}
              height={500}
              className="h-[calc(100%-10rem)] w-full aspect-auto] rounded-lg"
            />
            <div className="flex flex-col min-h-[10rem] justify-center gap-2">
              <h4 className="mt-2 font-bold text-lg">
                Migas Data Repository | MDR{" "}
                <span className="text-xs font-thin">
                  (datamigas.esdm.go.id)
                </span>
              </h4>
              {/* <p>Soon Launching Public</p> */}
              <p className="text-sm">2022-2023</p>
              <p className="text-sm">
                Application development in adding, modifying, or
                maintaining applications
              </p>
            </div>
          </div>
          <div className="md:w-1/4 rounded-xl overflow-hidden text-center border-2 border-sky-600 p-1 shadow-lg my-2 hover:scale-95 hover:border-4 transition-all">
            <Image
              src={"/assets/projects/webportomin.png"}
              alt="landingpage"
              width={500}
              height={500}
              className="h-[calc(100%-10rem)] w-full aspect-auto] rounded-lg"
            />
            <div className="flex flex-col min-h-[10rem] justify-center gap-2">
              <h4 className="mt-2 font-bold text-lg">
                Personal Portfolio Website
              </h4>
              {/* <p>Soon Launching Public</p> */}
              <p className="text-sm">2023</p>
              <p className="text-sm">
                It will continue to be developed :&gt; <br />
                using NextJS*
              </p>
            </div>
          </div>
          <div className="md:w-1/4 rounded-xl overflow-hidden text-center border-2 border-sky-600 p-1 shadow-lg my-2 hover:scale-95 hover:border-4 transition-all">
            <Image
              src={"/assets/projects/netflix.png"}
              alt="landingpage"
              width={500}
              height={500}
              className="h-[calc(100%-10rem)] w-full aspect-auto] rounded-lg"
            />
            <div className="flex flex-col min-h-[10rem] justify-center gap-2">
              <h4 className="mt-2 font-bold text-lg">
                Duplicate Netflix Slicing
              </h4>
              {/* <p>Soon Launching Public</p> */}
              <p className="text-sm">2022</p>
              <p className="text-sm">built with NextJS + Material UI</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
