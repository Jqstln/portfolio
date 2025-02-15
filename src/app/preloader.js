'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Loader = ({ loadingPathname }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-tr from-gray-900 to-neutral-900">
    <span className="animate-pulse text-5xl text-white">Loading {loadingPathname}</span>
  </div>
);

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const currentPathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const handleLoading = () => setIsLoading(false);
    const timer = setTimeout(handleLoading, 1000);
    return () => clearTimeout(timer);
  }, [currentPathname]);

  return isLoading ? <Loader loadingPathname={currentPathname} /> : null;
}
