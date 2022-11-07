import { usePathname } from 'next/navigation';

export function useActiveSection() {
  const asPath = usePathname();
  if (asPath.startsWith('/docs')) {
    return 'docs';
  } else if(asPath.startsWith('/contribute')) {
    return 'contribute';
  }
  return 'home';
}