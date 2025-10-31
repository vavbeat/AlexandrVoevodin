"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    title: "Fusion Reactor Control System",
    description: `Advanced real-time monitoring platform for inertial electrostatic confinement fusion reactors. Features:
    - Microservices architecture with Docker Compose deployment
    - Web/mobile interface for remote reactor control (real-time telemetry)
    - Data streaming pipeline with InfluxDB time-series database
    - Reactor performance dashboard using Grafana visualization
    - YAML configuration templates for reproducible plasma profiles
    - CLI in kubectl style for experiment management`,
    link: "https://github.com/Abhiz2411/3D-interactive-portfolio",
    images: [
      "/assets/projects-screenshots/smartparkingassitant/01.jpeg",
      "/assets/projects-screenshots/smartparkingassitant/03.jpeg",
      "/assets/projects-screenshots/smartparkingassitant/04.jpeg",
    ],
  },
  {
    id: 2,
    title: "financeme",
    description: `This project demonstrates the deployment of a DevOps pipeline for a global banking and
            financial services provider, FinanceMe. The company transitioned from a monolithic 
            architecture to a microservice-based architecture to handle increased traffic and 
            scaling challenges. The project involves automating infrastructure provisioning, build 
            and deployment processes, and continuous monitoring using modern DevOps tools and 
            AWS services.`,
    link: "https://github.com/Abhiz2411/3D-interactive-portfolio",
    images: [
      "/assets/projects-screenshots/financeme/1.png",
      "/assets/projects-screenshots/financeme/2.png",
      "/assets/projects-screenshots/financeme/3.png",
      "/assets/projects-screenshots/financeme/4.png",
      "/assets/projects-screenshots/financeme/5.png",
      "/assets/projects-screenshots/financeme/6.png",
      "/assets/projects-screenshots/financeme/7.png",
      "/assets/projects-screenshots/financeme/8.png",
      "/assets/projects-screenshots/financeme/9.png",
      "/assets/projects-screenshots/financeme/10.png"
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the
            dopest way possible.`,
    link: "https://github.com/Abhiz2411/3D-interactive-portfolio",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },
  {
    id: 4,
    title: "Smart Parking Assistant",
    description: `Transform parking with the Smart Parking Assistant, an IoT marvel powered by Arduino 
            and IR sensors to detect and recommend the best spots in real-time. Enjoy a sleek GUI 
            that visualizes availability and an intelligent system for quick, optimal decisions. 
            Built to adapt with customizable hardware and Python-powered software for seamless 
            integration. Say goodbye to parking woes and hello to smarter space utilization!`,
    link: "https://github.com/Abhiz2411/3D-interactive-portfolio",
    images: [
      "/assets/projects-screenshots/smartparkingassitant/01.jpeg",
      "/assets/projects-screenshots/smartparkingassitant/03.jpeg",
      "/assets/projects-screenshots/smartparkingassitant/04.jpeg",

    ],
  },
  {
    id: 5,
    title: "Smart Job Tracker",
    description: `Track your job applications effortlessly with a sleek, dark-themed app that lets you 
            manage, filter, and visualize your job search. Organize your applications with a 
            Kanban board, monitor progress through status updates, and store everything securely. 
            Enjoy seamless access across devices with a responsive design and email reminders for 
            interviews. A smarter, more intuitive way to stay on top of your job hunt!`,
    link: "https://github.com/Abhiz2411/3D-interactive-portfolio",
    images: [
      "/assets/projects-screenshots/smartjobtracker/01.png",
      "/assets/projects-screenshots/smartjobtracker/02.png",
      "/assets/projects-screenshots/smartjobtracker/03.png",
      "/assets/projects-screenshots/smartjobtracker/04.png",
      "/assets/projects-screenshots/smartjobtracker/05.png",
      "/assets/projects-screenshots/smartjobtracker/06.png",
      "/assets/projects-screenshots/smartjobtracker/07.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.title}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.title}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
