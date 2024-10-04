import { Spinner } from "@nextui-org/react";
import { lazy, Suspense, useEffect, useState } from "react";

const LandingPageMobile = lazy(() =>
  import("./components/Pages/LandingPageMobile")
);
const LandingPageMd = lazy(() => import("./components/Pages/LandingPageMd"));

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);
  const [loading, setLoading] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 834);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {loading ? (
        <Spinner
          label="Welcome to Sanchit's Space..."
          className="flex flex-col bg-oceandark items-center justify-center min-h-screen"
          color="warning"
        />
      ) : (
        <Suspense
          fallback={
            <Spinner
              label="Welcome to Sanchit's Space..."
              className="flex flex-col bg-oceandark items-center justify-center min-h-screen"
              color="warning"
            />
          }
        >
          {isMobile ? <LandingPageMobile /> : <LandingPageMd />}
        </Suspense>
      )}
    </div>
  );
}

export default App;
