
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Leaf } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rawaa-light p-4 rtl">
      <div className="text-center">
        <div className="inline-flex items-center justify-center mb-8">
          <div className="h-16 w-16 rounded-full bg-rawaa-primary flex items-center justify-center">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <span className="text-3xl font-bold text-rawaa-primary mr-4">رواء</span>
        </div>
        
        <h1 className="text-6xl font-bold mb-4 text-rawaa-dark">404</h1>
        <p className="text-xl text-gray-600 mb-8">عفواً، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-rawaa-primary hover:bg-rawaa-primary/90">
            <Link to="/">العودة للصفحة الرئيسية</Link>
          </Button>
          <Button variant="outline" asChild className="border-rawaa-primary text-rawaa-primary hover:bg-rawaa-primary/10">
            <Link to="/contact">تواصل معنا</Link>
          </Button>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-600">ربما تكون الصفحة قد تم نقلها أو تغيير عنوانها؟</p>
          <p className="text-gray-600 mt-2">يمكنك استخدام شريط البحث في الأعلى للبحث عن ما تحتاجه.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
