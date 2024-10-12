import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: ('buyer' | 'seller')[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    } else if (allowedRoles && !allowedRoles.includes(user!.role)) {
      router.push('/unauthorized');
    }
  }, [isAuthenticated, router, allowedRoles, user]);

  if (!isAuthenticated || (allowedRoles && !allowedRoles.includes(user!.role))) {
    return null;
  }

  return <>{children}</>;
}