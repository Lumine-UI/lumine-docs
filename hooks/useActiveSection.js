import { usePathname } from 'next/navigation';

export function useActiveSection() {
  const asPath = usePathname();
  if (asPath.startsWith('/docs')) {
    return 'docs';
  } else {
    return 'home';
  }
}