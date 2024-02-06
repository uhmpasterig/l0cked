import { Button } from "@repo/ui/shadcn/button";
import { Test } from "@repo/ui/navigation/test";

export default function Page(): JSX.Element {
  return (
    <div className="flex items-center flex-col">
      <Test />
      <Button>Hello!!!!!</Button>
    </div>
  );
}
