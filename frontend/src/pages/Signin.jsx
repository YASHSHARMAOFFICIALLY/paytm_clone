import { Button } from "../component/Button";
import { Bottomwarning } from "../component/Bottom"
import {Heading} from "../component/Heading"
import { SubHeading } from "../component/Subheading"
import { Inputbox } from "../component/Input"


export const Signin = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <Inputbox placeholder="harkirat@gmail.com" label={"Email"} />
        <Inputbox placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <Bottomwarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}