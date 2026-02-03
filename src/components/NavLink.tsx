import { NavLink as RouterNavLink, NavLinkProps as RouterNavLinkProps, Link, LinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useLocation2 } from "@/contexts/LocationContext";

interface NavLinkCompatProps extends Omit<RouterNavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const { withParams } = useLocation2();
    const toWithParams = typeof to === 'string' ? withParams(to) : to;
    
    return (
      <RouterNavLink
        ref={ref}
        to={toWithParams}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

// Param-aware Link component
interface ParamLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
}

const ParamLink = forwardRef<HTMLAnchorElement, ParamLinkProps>(
  ({ to, ...props }, ref) => {
    const { withParams } = useLocation2();
    
    return (
      <Link ref={ref} to={withParams(to)} {...props} />
    );
  }
);

ParamLink.displayName = "ParamLink";

export { NavLink, ParamLink };
