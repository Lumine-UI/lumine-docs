import {useRouter} from 'next/router';
import {useState, useRef, useEffect} from 'react';

const usePendingRoute = () => {
  // const {events} = useRouter();
  const [pendingRoute, setPendingRoute] = useState(null);
  const currentRoute = useRef(null);
  // useEffect(() => {
    // let routeTransitionTimer = null;

    // const handleRouteChangeStart = (url) => {
    //   clearTimeout(routeTransitionTimer);
    //   routeTransitionTimer = setTimeout(() => {
    //     if (currentRoute.current !== url) {
    //       currentRoute.current = url;
    //       setPendingRoute(url);
    //     }
    //   }, 100);
    // };
    // const handleRouteChangeComplete = () => {
    //   setPendingRoute(null);
    //   clearTimeout(routeTransitionTimer);
    // };
    // events.on('routeChangeStart', handleRouteChangeStart);
    // events.on('routeChangeComplete', handleRouteChangeComplete);

    // return () => {
    //   events.off('routeChangeStart', handleRouteChangeStart);
    //   events.off('routeChangeComplete', handleRouteChangeComplete);
    //   clearTimeout(routeTransitionTimer);
    // };
  // }, []);

  return pendingRoute;
};

export default usePendingRoute;