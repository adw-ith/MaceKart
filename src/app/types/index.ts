export interface User {
    id: string;
    name: string;
    email: string;
    role: 'buyer' | 'seller';
  }
  
  export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    seller: {
      id: string;
      name: string;
    };
    image?: string;
  }
  
  export interface Order {
    id: string;
    product: Product;
    buyer: User;
    status: 'pending' | 'processing' | 'delivered' | 'cancelled';
    price: number;
    date: string;
  }
  export interface AuthUser {
    id: string;
    name: string;
    email: string;
    role: 'buyer' | 'seller';
  }
  
  export interface AuthContextType {
    user: AuthUser | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
  }