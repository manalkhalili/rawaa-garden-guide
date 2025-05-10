
import React from 'react';
import { Link } from 'react-router-dom';
import { Flower, Leaf, Sprout } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const PlantsDropdown: React.FC = () => {
  return (
    <NavigationMenu dir="rtl">
      <NavigationMenuList className="space-x-0 space-x-reverse">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white">النباتات</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                title="النباتات الداخلية"
                href="/indoor-plants"
              >
                <div className="flex items-center gap-2 mt-2">
                  <Flower className="h-4 w-4 text-rawaa-primary" />
                  <span>مجموعة متنوعة من النباتات المنزلية</span>
                </div>
              </ListItem>
              <ListItem
                title="النباتات الخارجية"
                href="/outdoor-plants"
              >
                <div className="flex items-center gap-2 mt-2">
                  <Leaf className="h-4 w-4 text-rawaa-secondary" />
                  <span>نباتات الحدائق والمساحات المفتوحة</span>
                </div>
              </ListItem>
              <ListItem
                title="البذور"
                href="/seeds"
              >
                <div className="flex items-center gap-2 mt-2">
                  <Sprout className="h-4 w-4 text-rawaa-accent" />
                  <span>بذور متنوعة للزراعة المنزلية</span>
                </div>
              </ListItem>
              <ListItem
                title="جميع النباتات"
                href="/all-plants"
              >
                <div className="flex items-center gap-2 mt-2">
                  <Flower className="h-4 w-4" />
                  <span>تصفح جميع أنواع النباتات</span>
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default PlantsDropdown;
