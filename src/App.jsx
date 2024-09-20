import { Spinner } from "@nextui-org/react";
import { lazy, Suspense, useEffect, useState } from "react";
const LandingPageMobile = lazy(() =>
  import("./components/Pages/LandingPageMobile")
);
const LandingPageMd = lazy(() => import("./components/Pages/LandingPageMd"));

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 834);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(isMobile);
  return (
    <div>
      <Suspense
        fallback={
          <Spinner
            label="Welcome to Sanchit's Space..."
            className="flex flex-col items-center justify-center min-h-screen"
            color="warning"
          />
        }
      >
        {isMobile ? <LandingPageMobile /> : <LandingPageMd />}
      </Suspense>
    </div>
  );
}

export default App;
