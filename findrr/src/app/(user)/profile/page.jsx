
"use client"
import { Input } from "@/components/ui/input";
import Header from "../../header/header";
import Navbar from "../navigation/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Link from "next/link";



const Profile = () => {

  const [name, setName] = useState("");
  // const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [role, setRole] = useState(null);
  const [experience, setExperience] = useState("fresher");
  const [opento, setOpento] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [prevcomp, setPrevcomp] = useState("");
  const [prevtitle, setPrevtitle] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [currently, setCurrently] = useState(false);
  const [description, setDescription] = useState("");
  const [aboutpos, setAboutpos] = useState("");
  const[uni, setUni] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");


  const userName = (e) => {
    setName(e.target.value);
    console.log(name);
  }

  const userLoc = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };

  const userRole = (e) => {
    setRole(e.target.value);
    console.log(role);
  }

  const userExp = (e) => {
    setExperience(e.target.value);
    console.log(experience);
  };

  const userOpen = (e) => {
    setOpento(e.target.value);
    console.log(opento);
  };

  const userBio = (e) => {
    setBio(e.target.value);
    console.log(bio);
  };

  const userWebsite = (e) => {
    setWebsite(e.target.value);
    console.log(website);
  };

  const userLinkedin = (e) => {
    setLinkedin(e.target.value);
    console.log(linkedin);
  };

  const userGithub = (e) => {
    setGithub(e.target.value);
    console.log(github);
  };

  const userTwitter = (e) => {
    setTwitter(e.target.value);
    console.log(twitter);
  };

  const userPrevComp = (e) => {
    setPrevcomp(e.target.value);
    console.log(prevcomp);
  };

  const userPrevtitle = (e) => {
    setPrevtitle(e.target.value);
    console.log(prevtitle);
  };

  const userStart = (e) => {
    setStartdate(e.target.value);
    console.log(startdate);
  };

  const userEnd = (e) => {
    setEnddate(e.target.value);
    console.log(enddate);
  };

  const userCurrently = () => {
    setCurrently(true);
    console.log(currently);
  }

  const userDescription = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const userPosition = (e) => {
    setAboutpos(e.target.value);
    console.log(aboutpos);
  };

  const userUni = (e) => {
    setUni(e.target.value);
    console.log(uni);
  };

  const userGradYear = (e) => {
    setGradYear(e.target.value);
    console.log(gradYear);
  };

  const userDegree = (e) => {
    setDegree(e.target.value);
    console.log(degree);
  };

  const userMajor = (e) => {
    setMajor(e.target.value);
    console.log(major);
  };

  const toSave = {
    name: name,
    location: location,
    role: role,
    experience: experience,
    opento: opento,
    bio: bio,
    website: website,
    linkedin: linkedin,
    github: github,
    twitter: twitter,
    prevcomp: prevcomp,
    prevtitle: prevtitle,
    startdate: startdate,
    enddate: enddate,
    currently: currently,
    description: description,
    aboutpos: aboutpos,
    uni: uni,
    gradYear: gradYear,
    degree: degree,
    major: major,
  }

  const saveProfile = () => {
      fetch("http://localhost:1234/jobs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toSave),
      }).then((response) => {
        console.log(response);
      }).catch((err) => {
        console.log("Profile not Created!" + err);
      });

      console.log("Data saved in the Database Successfully!")
  };

  return (
    <>
      <Header />
      <div className="flex w-full h-screen ">
        <Navbar />

        <div className="w-3/4 h-screen">
          <div className="flex  justify-start w-full">
          <p className="font-semibold text-5xl mt-5 ml-5">
            Your Findrr Profile
          </p>

        <div className="w-2/6 bg-red ">

        </div>

        <div className="flex items-end justify-center  ml-4">
          <p className="underline mb-2 m-1 ">Already have an account?</p>
            <Link href="/login">
          <Button className="m-2  mb-0 mt-0">
              Login
          </Button>
            </Link>
        </div>
          </div>

          <div className="w-full h-auto  mt-4 rounded border-2 border-b-0 border-black flex ">
            <div className="w-1/3  h-auto  m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">About</p>
              </div>
              <div className="w-2/3 h-auto text-sm  mt-2 ">
                <p>Tell us about Yourself, so companies know who you are.</p>
              </div>
            </div>

            <div className="w-2/3 h-auto   m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Your Name*</p>
              </div>
              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter your name" onChange = {(e) => userName(e)} />
              </div>

              <div className="w-full h-auto  mt-5 flex items-center">
                <Avatar className="mr-5 w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Button
                  variant={Ghost}
                  className="rounded border-2 border-black  hover:border-blue-600 hover:text-blue-600"
                >
                  Upload a new photo
                </Button>
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Where are you based?*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter your location"  onChange = {(e) => userLoc(e)} />
              </div>

              <div className="w-full h-auto  mt-5 flex items-center">
                <div className="w-2/3 h-auto   mt-2  mr-3">
                  <p className="font-semibold text-xl">
                    Enter your primary role*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter your primary name" onChange = {(e) => userRole(e)} />
                  </div>
                </div>

                <div className="w-2/3 h-auto   mt-2 ">
                  <p className="font-semibold text-xl">Years of Experience*</p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter your exprience" onChange = {(e) => userExp(e)} />
                  </div>
                </div>
              </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">
                  Open to the following roles*
                </p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter the roles you are open to"  onChange = {(e) => userOpen(e)} />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Your Bio</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Textarea placeholder="About yourself" onChange = {(e) => userBio(e)} />
              </div>
            </div>
          </div>

          <Separator className="bg-black"/>


          <div className="w-full h-auto  rounded border-2 border-b-0 border-t-0 border-black flex ">
            <div className="w-1/3  h-auto  m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Your Social Profiles</p>
              </div>
              <div className="w-2/3 h-auto text-sm mt-2 ">
                <p>Where can people find you online?</p>
              </div>
            </div>

            <div className="w-2/3 h-auto   m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Website</p>
              </div>
              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="https://"  onChange = {(e) => userWebsite(e)} />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">LinkedIn</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="www.linkedin.com/in/"  onChange = {(e) => userLinkedin(e)} />
              </div>

                <div className="w-full h-auto  mt-5  mr-3">
                  <p className="font-semibold text-xl">
                    Github
                  </p>
                </div>

                  <div className="w-full h-auto text-sm mt-2 ">
                    <Input placeholder="www.github.com/"  onChange = {(e) => userGithub(e)} />
                  </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">Twitter</p>
              </div>

              <div className="w-full h-auto text-sm mt-2 ">
                <Input placeholder="www.twitter.com/" onChange = {(e) => userTwitter(e)} />
              </div>
            </div>
          </div>

          <Separator className="p-0.5"/>


          <div className="w-full h-auto   rounded border-2 border-t-0 border-b-0 border-black flex ">
            <div className="w-1/3  h-auto  m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Your Work Experience</p>
              </div>
              <div className="w-2/3 h-auto text-sm  mt-2 ">
                <p>What other positions have you held?</p>
              </div>
            </div>

            <div className="w-2/3 h-auto   m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Company*</p>
              </div>
              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter Company's name" onChange = {(e) => userPrevComp(e)} />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Title*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Title" onChange = {(e) => userPrevtitle(e)} />
              </div>

                <div className="w-full h-auto   mt-2  mr-3">
                  <p className="font-semibold text-xl">
                    Start Date*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Start Date"  onChange = {(e) => userStart(e)} />
                  </div>

                <div className="w-full h-auto   mt-2 ">
                  <p className="font-semibold text-xl">End Date*</p>
                </div>

                <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="End Date"  onChange = {(e) => userEnd(e)} />
                </div>
              
                <Checkbox className="mt-2" onClick = {userCurrently} /> I Currently work here

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Description</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Textarea placeholder="Description" onChange = {(e) => userDescription(e)}  />
              </div>

              <div className="w-full h-auto text-sm  mt-5 ">
                <Input placeholder="The position is a..."  onChange = {(e) => userPosition(e)} />
              </div>
            </div>
          </div>
        </div>

        <Separator/>

          <div className="w-full h-auto   rounded border-2 border-b-0 border-t-0 border-black flex ">
            <div className="w-1/3  h-auto  m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Education</p>
              </div>
              <div className="w-2/3 h-auto text-sm  mt-2 ">
                <p>What schools have you studied at?</p>
              </div>
            </div>

            <div className="w-2/3 h-auto   m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Education*</p>
              </div>
              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="College/University" onChange = {(e) => userUni(e)} />
              </div>

              <div className="w-full h-auto  mt-5 flex items-center">
              <p className="font-semibold text-xl">Graduation*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Graduation Year"  onChange = {(e) => userGradYear(e)} />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Degree and Major*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Degree Type" onChange = {(e) => userDegree(e)} />
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Major / Field of Study"  onChange = {(e) => userMajor(e)} />
              </div>

              <div className="w-full h-auto  mt-5 flex items-center">
                <div className="w-2/3 h-auto   mt-2  mr-3">
                  <p className="font-semibold text-xl">
                    Enter your primary role*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter your name" />
                  </div>
                </div>

                <div className="w-2/3 h-auto   mt-2 ">
                  <p className="font-semibold text-xl">Years of Experience*</p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter your name" />
                  </div>
                </div>
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">
                  Open to the following roles*
                </p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter your name" />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Your Bio</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Textarea placeholder="About yourself" />
              </div>
            </div>
          </div>

          <Separator className="bg-black"/>

          <div className="w-full h-auto  rounded border-2  border-black flex ">
          <div className="w-full h-auto  mt-5  mb-5 flex items-center justify-center">
              <Button
                  className="rounded border-2 p-6 pl-10 pr-10 bg-blue-600 border-black  hover:border-blue-600 "
                  onClick = {saveProfile}
                >
                  Save
                </Button>
            </div>
          </div>
          
      </div>
        </div>
    </>
  )
};

export default Profile;
