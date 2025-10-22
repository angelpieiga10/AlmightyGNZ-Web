import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from './CartContext';

export interface ShippingInfo {
  name: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
}

export interface PaymentInfo {
  paymentMethod: 'credit-card' | 'debit-card' | 'paypal';
  cardNumber?: string;
  cardName?: string;
  expiryDate?: string;
  cvv?: string;
  paypalEmail?: string;
}

export interface OrderSummary {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

interface CheckoutContextType {
  shippingInfo: ShippingInfo | null;
  paymentInfo: PaymentInfo | null;
  orderSummary: OrderSummary | null;
  setShippingInfo: (info: ShippingInfo) => void;
  setPaymentInfo: (info: PaymentInfo) => void;
  setOrderSummary: (summary: OrderSummary) => void;
  clearCheckoutData: () => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null);

  const clearCheckoutData = () => {
    setShippingInfo(null);
    setPaymentInfo(null);
    setOrderSummary(null);
  };

  return (
    <CheckoutContext.Provider value={{
      shippingInfo,
      paymentInfo,
      orderSummary,
      setShippingInfo,
      setPaymentInfo,
      setOrderSummary,
      clearCheckoutData,
    }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within CheckoutProvider');
  }
  return context;
}
