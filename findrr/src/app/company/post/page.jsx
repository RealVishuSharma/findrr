
"use client"
import Header from "../../header/header";
import Navbar from "../navigation/navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const Post = () => {

  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState();
  const [experience, setExperience] = useState(null);
  const [salary, setSalary] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const toPost = {
    position: position,
    skills: skills,
    experience: experience,
    salary: salary,
    location: location,
    description: description,
  }

  const postJob = () => {

    fetch("http://localhost:1234/company/post", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toPost)
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log("Data not saved!" + err);
    })

    console.log(position, skills, experience, salary, location, description);
  }

  const jobPosition = (e) => {
    setPosition(e.target.value);
    console.log(position);
  }

  const jobSkills = (e) => {
    setSkills(e.target.value);
    console.log(skills);
  }

  const jobExperience = (e) => {
    setExperience(e.target.value);
    console.log(experience);
  }

  const jobSalary = (e) => {
    setSalary(e.target.value);
    console.log(salary);
  }

  const jobLocation = (e) => {
    setLocation(e.target.value);
    console.log(location);
  }

  const jobDescription = (e) => {
    setDescription(e.target.value);
    console.log(description);
  }


  return (
    <>
      <Header />
      <div className="flex w-full h-screen ">
        <Navbar />

        <div className="w-3/4 h-screen ">
          <p className="font-semibold text-5xl mt-5 ml-5">Job Details</p>       

        <div className="w-full h-auto  mt-4 rounded border-2 border-b-0 border-black flex ">
            <div className="w-1/3  h-auto  m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">About</p>
              </div>
              <div className="w-2/3 h-auto text-sm  mt-2 ">
                <p>Tell us about the job post, so we can recommend it to the best candidates.</p>
              </div>
            </div>

            <div className="w-2/3 h-auto   m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Job position*</p>
              </div>
              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter job position" onChange= {(e) => jobPosition(e)}/>
              </div>

              <div className="w-full h-auto   mt-5  mr-3 ">
                  <p className="font-semibold text-xl">
                    Enter Skills needed*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter the skills required for this position" onChange = {(e) => jobSkills(e)} />
                  </div>
                </div>


              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Experience*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter experience required for this position" onChange = {(e) => jobExperience(e)} />
              </div>

                <div className="w-full h-auto   mt-5  mr-3">
                  <p className="font-semibold text-xl">
                    Enter Salary Range*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter salary range for this position" type= "number" onChange = {(e) => jobSalary(e)} />
                  </div>
                </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">
                  Location*
                </p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Textarea placeholder="Enter the  Location of the job"  onChange = {(e) => jobLocation(e)} />
              </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">
                  Job Description*
                </p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Textarea placeholder="Give the description of the job..." onChange = {(e) => jobDescription(e)} />
              </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">
                  <Button onClick = {postJob} >Post Job</Button>
                </p>
              </div>

            </div>
          </div>

          <Separator className="bg-black"/>

        </div>
      </div>
    </>
  );
};

export default Post;
