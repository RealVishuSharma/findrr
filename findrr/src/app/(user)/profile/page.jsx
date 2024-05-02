
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



const Profile = () => {

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [role, setRole] = useState(null);
  const [experience, setExperience] = useState("fresher");
  const [opento, setOpento] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [otherpos, setOtherpos] = useState("");
  const [prevcomp, setPrevcomp] = useState("");
  const [prevtitle, setPrevtitle] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [currently, setCurrently] = useState(false);
  const [description, setDescription] = useState("");
  const [aboutpos, setAboutpos] = useState("");
  const[uni, setUni] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");


  return (
    <>
      <Header />
      <div className="flex w-full h-screen ">
        <Navbar />

        <div className="w-3/4 h-screen ">
          <p className="font-semibold text-5xl mt-5 ml-5">
            Your Findrr Profile
          </p>
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
                <Input placeholder="Enter your name" />
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
                <Input placeholder="Enter your location" />
              </div>

              <div className="w-full h-auto  mt-5 flex items-center">
                <div className="w-2/3 h-auto   mt-2  mr-3">
                  <p className="font-semibold text-xl">
                    Enter your primary role*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter your primary name" />
                  </div>
                </div>

                <div className="w-2/3 h-auto   mt-2 ">
                  <p className="font-semibold text-xl">Years of Experience*</p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter your exprience" />
                  </div>
                </div>
              </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">
                  Open to the following roles*
                </p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter the roles you are open to" />
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
                <Input placeholder="https://" />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">LinkedIn</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="www.linkedin.com/in/" />
              </div>

                <div className="w-full h-auto  mt-5  mr-3">
                  <p className="font-semibold text-xl">
                    Github
                  </p>
                </div>

                  <div className="w-full h-auto text-sm mt-2 ">
                    <Input placeholder="www.github.com/" />
                  </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">Twitter</p>
              </div>

              <div className="w-full h-auto text-sm mt-2 ">
                <Input placeholder="www.twitter.com/" />
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
                <Input placeholder="Enter Company's name" />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Title*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Title" />
              </div>

                <div className="w-full h-auto   mt-2  mr-3">
                  <p className="font-semibold text-xl">
                    Start Date*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Start Date" />
                  </div>

                <div className="w-full h-auto   mt-2 ">
                  <p className="font-semibold text-xl">End Date*</p>
                </div>

                <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="End Date" />
                </div>
              
                <Checkbox className="mt-2"/> I Currently work here

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Description</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Textarea placeholder="Description" />
              </div>

              <div className="w-full h-auto text-sm  mt-5 ">
                <Input placeholder="The position is a..." />
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
                <Input placeholder="College/University" />
              </div>

              <div className="w-full h-auto  mt-5 flex items-center">
              <p className="font-semibold text-xl">Graduation*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Graduation" />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Degree and Major*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Degree Type" />
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Major / Field of Study" />
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
          
      </div>
        </div>
    </>
  )
};

export default Profile;
