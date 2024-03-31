import Image from "next/image";
import Link from "next/link";
import React from "react";
import SortProjects from "../../components/home/SortProjects";
import { getData } from "@/services/projects";

export default async function Projects() {
  const projects = await getData("http://localhost:3000/api/project");
  return (
    <>
      <SortProjects />
      <div className="max-w-6xl mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5">
        {projects.data.length > 0 &&
          projects.data.map((project: any) => (
            <div
              key={project.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 mt-2">
                <Link href={`/project/detail/${project.id}`}>
                  <Image
                    className="rounded-t-lg"
                    src={project.image}
                    alt="project"
                    width={500}
                    height={500}
                  />
                </Link>
                <div className="p-5 ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
                    {project.desc}
                  </p>
                  <Link
                    href={project.gitUrl}
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
