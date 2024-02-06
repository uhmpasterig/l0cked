import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { PersonIcon } from "@radix-ui/react-icons";

interface ProfilePictureProps {
  url: string | null | undefined;
}

const ImageSkeleton = () => {
  return <Skeleton className="h-full w-full rounded-full" />;
};

const ErrorImage = () => {
  return (
    <div className="h-full w-full bg-foreground/10 flex items-center justify-center">
      <PersonIcon className="h-5 w-7 text-foreground/50" />
    </div>
  );
};

const ImageLoader = ({ url }: { url: string }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setErrorHook] = useState(false);
  const setError = (value: boolean) => {
    setLoaded(true);
    setErrorHook(value);
  };
  return (
    <>
      {!error && (
        <Image
          width={40}
          height={40}
          src={url}
          alt=""
          className="h-full w-full"
          onLoadingComplete={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {!loaded && <ImageSkeleton />}
      {error && <ErrorImage />}
    </>
  );
};

const ProfilePicture = ({ url }: ProfilePictureProps) => {
  if (url === null || url === undefined) {
    return <ImageSkeleton />;
  }
  return (
    <div className="h-10 w-10 overflow-hidden rounded-full cursor-pointer">
      {url ? <ImageLoader url={url} /> : <ImageSkeleton />}
    </div>
  );
};

export { ProfilePicture };
