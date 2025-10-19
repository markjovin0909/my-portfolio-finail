import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Ghost } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl">
        <Ghost className="w-24 h-24 mx-auto mb-6 text-primary animate-float" />
        <h1 className="mb-4 text-8xl font-cinzel font-bold text-glow-purple">404</h1>
        <p className="mb-4 text-2xl font-cinzel text-foreground">Lost in the Graveyard</p>
        <p className="mb-8 text-lg text-muted-foreground">
          The spirits have led you astray. This path does not exist in our realm.
        </p>
        <Button
          size="lg"
          onClick={() => window.location.href = '/'}
          className="bg-primary hover:bg-primary/90 shadow-[var(--shadow-purple)]"
        >
          <Home className="w-5 h-5 mr-2" />
          Return to the Gate
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
