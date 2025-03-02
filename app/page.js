import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to equiskill-ai</h1>
      <Button>Click</Button>

      <UserButton/>
    </div>
  );
}
