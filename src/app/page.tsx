import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
   <div>
    <Input placeholder="Hello"/>
    <Button variant={"elevated"}>
      Hello
    </Button>
   </div>
  );
}
