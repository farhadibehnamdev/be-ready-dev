import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider } from "@nextui-org/react";
import { BadgeCheck, Check, X } from "lucide-react";

export default async function Verify(searchParams: {
  searchParams: { token: string };
}) {
  const verificationEmail = await fetch(
    `http:localhost:8080/auth/verify-email?token=${searchParams.searchParams.token}`
  );
  return (
    <div
      className="rounded-md shadow-md  
        p-5 text-center h-screen
   content-center text-slate-200"
    >
      <div className="text-3xl w-fit container p-5">
        {verificationEmail.status === 200 ? (
          <span className="flex justify-center items-center gap-3">
            <Check size={24} />
            <Divider orientation="vertical" className="h-10" />
            <span>Account verified successfully</span>
          </span>
        ) : (
          <span className="flex justify-center items-center gap-3">
            <X size={24} /> <Divider orientation="vertical" className="h-10" />
            <span> Something went wrong...</span>
          </span>
        )}
      </div>
    </div>
  );
}
