
"use client"
import { Input } from "@/components/ui/input";
import Header from "../../header/header";
import Navbar from "../navigation/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Link from "next/link";


const page = () => {

  const [name, setName] = useState("");
  // const [logo, setLogo] = useState();
  const [industry, setIndustry] = useState("");
  const [size, setSize] = useState(null);
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  // const [image, setImage] = useState("");

  const compName = (e) => {
    setName(e.target.value);
    console.log(name);
  }

  // const compLogo = (e) => {

  // }

  const compIndustry = (e) => {
    setIndustry(e.target.value);
    console.log(industry);
  };

  const compSize = (e) => {
    setSize(e.target.value);
    console.log(size);
  };

  const compLocation = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };

  const compWebsite = (e) => {
    setWebsite(e.target.value);
    console.log(website);
  };

  const compLinkedin = (e) => {
    setLinkedin(e.target.value);
    console.log(linkedin);
  };

  const compInstagram = (e) => {
    setInstagram(e.target.value);
    console.log(instagram);
  };

  const compTwitter = (e) => {
    setTwitter(e.target.value);
    console.log(twitter);
  };

  const compPerson = (e) => {
    setPerson(e.target.value);
    console.log(person);
  };

  const compEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const compNumber = (e) => {
    setNumber(e.target.value);
    console.log(number);
  };

  const toSave = {
      name: name,
      // logo: logo,
      industry: industry,
     size: size,
      location: location,
      website: website,
      linkedin: linkedin,
      instagram: instagram,
      twitter: twitter,
      person: person,
      email: email,
      number: number,
      //image: image,
    }

  const saveProfile = () => {
    fetch("http://localhost:1234/company/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSave)
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log("Profile not Created!" + error);
    });

    console.log(name,
      // logo,
      industry,
      size,
      location,
      website,
      linkedin,
      instagram,
      twitter,
      person,
      email,
      number,
    );
  }

  return (
    <>
    <Header />
    <div className="flex w-full h-screen ">
      <Navbar />

      <div className="w-3/4 h-screen ">
        <div className="flex  justify-start w-full">
        <p className="font-semibold text-5xl mt-5 ml-5">
          Your Findrr Profile
        </p>

        <div className="w-2/6 bg-red ">

        </div>

        <div className="flex items-end justify-center  ml-4">
          <p className="underline mb-2 m-1 ">Already have an account?</p>
            <Link href="/company/login">
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
                <p>Tell us about the Company, so candidates can know who you are.</p>
              </div>
            </div>

            <div className="w-2/3 h-auto   m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Company Name*</p>
              </div>
              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter company name" onChange = {(e) => compName(e)} />
              </div>

              <div className="w-full h-auto  mt-5 flex items-center">
                <Avatar className="mr-5 w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>Logo</AvatarFallback>
                </Avatar>

                <Button
                  variant={Ghost}
                  className="rounded border-2 border-black  hover:border-blue-600 hover:text-blue-600"
                >
                  Upload Company's Logo
                </Button>
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Industry*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter Company's Industry" onChange= {(e) => compIndustry(e)} />
              </div>

                <div className="w-full h-auto   mt-2  mr-3">
                  <p className="font-semibold text-xl">
                    Company Size*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter Company's Size" onChange= {(e) => compSize(e)} />
                  </div>
                </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">
                  Location*
                </p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Textarea placeholder="Enter Company's Location" onChange= {(e) => compLocation(e)} />
              </div>

            </div>
          </div>

          <Separator className="bg-black"/>

           <div className="w-full h-auto  rounded border-2 border-b-0 border-t-0 border-black flex ">
            <div className="w-1/3  h-auto  m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Company's Social Handles</p>
              </div>
              <div className="w-2/3 h-auto text-sm mt-2 ">
                <p>Where can people find Company online?</p>
              </div>
            </div>

            <div className="w-2/3 h-auto   m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Website</p>
              </div>
              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="https://"  onChange = {(e) => compWebsite(e)} />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">LinkedIn</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="www.linkedin.com/in/" onChange = {(e) => compLinkedin(e)} />
              </div>

                <div className="w-full h-auto  mt-5  mr-3">
                  <p className="font-semibold text-xl">
                    Instagram
                  </p>
                </div>

                  <div className="w-full h-auto text-sm mt-2 ">
                    <Input placeholder="www.instagram.com/" onChange = {(e) => compInstagram(e)} />
                  </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">Twitter</p>
              </div>

              <div className="w-full h-auto text-sm mt-2 ">
                <Input placeholder="www.twitter.com/"  onChange = {(e) => compTwitter(e)} />
              </div>
            </div>
          </div>

          <Separator className=" bg-black"/>

           <div className="w-full h-auto  rounded border-2  border-b-0 border-t-0 border-black flex ">
            <div className="w-1/3  h-auto  m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Contact Information*</p>
              </div>
              <div className="w-2/3 h-auto text-sm mt-2 ">
                <p>Where can candidates contact company?</p>
              </div>
            </div>

            <div className="w-2/3 h-auto   m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Contact Person*</p>
              </div>
              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter the Person's Contact for job applications" onChange = {(e) => compPerson(e)} />
              </div>

              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Email Address*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Primary Email address for contacting company" onChange = {(e) => compEmail(e)} />
              </div>

                <div className="w-full h-auto  mt-5  mr-3">
                  <p className="font-semibold text-xl">
                    Phone number*
                  </p>
                </div>

                  <div className="w-full h-auto text-sm mt-2 ">
                    <Input placeholder="Contact number" onChange = {(e) => compNumber(e)} />
                  </div>

            </div>
          </div>

          <Separator className="p-0.5"/>

           <div className="w-full h-auto  rounded border-2  border-black flex ">
            <div className="w-1/3  h-auto  m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Add Photos and Media</p>
              </div>
              <div className="w-2/3 h-auto text-sm mt-2 ">
                <p>How can candidates know more about you?</p>
              </div>
            </div>
            
            <div className="w-full h-auto  mt-5 flex items-center justify-center">
              <Button
                  variant={Ghost}
                  className="rounded border-2 border-black  hover:border-blue-600 hover:text-blue-600"
                >
                  Upload Photos and Videos
                </Button>
            </div>
          </div>

          <Separator className="p-0.5"/>
          
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
}

export default page
