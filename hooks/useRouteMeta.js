import {useContext, createContext} from 'react';
import { usePathname } from 'next/navigation';
import { SidebarContext } from '../app/SidebarContext';

/**
 * While Next.js provides file-based routing, we still need to construct
 * a sidebar for navigation and provide each markdown page
 * previous/next links and titles. To do this, we construct a nested
 * route object that is infinitely nestable.
 */

export function useRouteMeta(rootRoute) {
  const sidebarContext = useContext(SidebarContext);
  const routeTree = rootRoute || sidebarContext;
  const pathname = usePathname();
  if (pathname === '/404') {
    return {
      breadcrumbs: [],
    };
  }
  const cleanedPath = pathname.split(/[\?\#]/)[0];
  const breadcrumbs = getBreadcrumbs(cleanedPath, routeTree);
  return {
    ...getRouteMeta(cleanedPath, routeTree),
    breadcrumbs: breadcrumbs.length > 0 ? breadcrumbs : [routeTree],
  };
}

// Performs a depth-first search to find the current route and its previous/next route
function getRouteMeta(
  searchPath,
  currentRoute,
  ctx = {}
) {
  const {routes} = currentRoute;

  if (ctx.route && !ctx.nextRoute) {
    ctx.nextRoute = currentRoute;
  }

  if (currentRoute.path === searchPath) {
    ctx.route = currentRoute;
  }

  if (!ctx.route) {
    ctx.prevRoute = currentRoute;
  }

  if (!routes) {
    return ctx;
  }

  for (const route of routes) {
    getRouteMeta(searchPath, route, ctx);
  }

  return ctx;
}

// iterates the route tree from the current route to find its ancestors for breadcrumbs
function getBreadcrumbs(
  path,
  currentRoute,
  breadcrumbs = []
) {
  if (currentRoute.path === path) {
    return breadcrumbs;
  }

  if (!currentRoute.routes) {
    return [];
  }

  for (const route of currentRoute.routes) {
    const childRoute = getBreadcrumbs(path, route, [
      ...breadcrumbs,
      currentRoute,
    ]);
    if (childRoute?.length) {
      return childRoute;
    }
  }

  return [];
}
