import { useEffect } from "react";
import { useRouter } from "next/router";

const contestIndex = () => {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("/contest/1", undefined, { shallow: true });
  }, []);

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter]);
  return <></>;
};

export default contestIndex;
