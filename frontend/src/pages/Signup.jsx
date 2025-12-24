import { Button } from "../component/Button";
import { Bottomwarning } from "../component/Bottom"
import {Heading} from "../component/Heading"
import { SubHeading } from "../component/Subheading"
import { Inputbox } from "../component/Input"
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";



export const Signup = () =>{
    const[firstname,setFirstname]= useState("")
    const[lastname,setlastname]=useState("")
    const[username,setusername]=useState("")
    const[password,setpassword]=useState("")
    const navigate = useNavigate()
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <Inputbox onChange = {(e)=>{
            setFirstname(e.target.value)
        }} placeholder="John" label={"First Name"} />
        <Inputbox  onChange = {(e)=>{
            setlastname(e.target.value)
        }}placeholder="Doe" label={"Last Name"} />
        <Inputbox onChange = {(e)=>{
            setusername(e.target.value)
        }} placeholder="harkirat@gmail.com" label={"Email"} />
        <Inputbox onChange ={(e)=>{
            setpassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button  onClick = {async()=>{
            try{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                 username,
                 firstname,
                 lastname,
                 password
            });
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
            alert("signup successful");
            }catch(err){
                console.log(err)
                alert("signup failed")
            }
          }}label={"Sign up"} />
        </div>
        <Bottomwarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
            </div>
        </div>
    )
}