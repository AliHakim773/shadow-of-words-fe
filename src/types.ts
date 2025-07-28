export interface Book {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  author_ar: string;
  author_en: string;
  price: number;
  cover_image?: string;
  available: boolean;
  created_at: string;
  updated_at: string;
}

export interface BookCreate {
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  author_ar: string;
  author_en: string;
  price: number;
  cover_image?: string;
  available: boolean;
}

export interface OrderItem {
  book_id: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  items: OrderItem[];
  total_amount: number;
  status: string;
  payment_method: string;
  stripe_payment_id?: string;
  created_at: string;
  updated_at: string;
}

export interface OrderCreate {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  items: OrderItem[];
  payment_method: string;
}

export interface AdminLogin {
  username: string;
  password: string;
}

export interface AuthContext {
  isAuthenticated: boolean;
  login: (credentials: AdminLogin) => Promise<boolean>;
  logout: () => void;
}