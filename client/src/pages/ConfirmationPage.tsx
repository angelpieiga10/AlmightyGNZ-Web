import { useCheckout } from '@/contexts/CheckoutContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, CreditCard, MapPin } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { useEffect } from 'react';

export default function ConfirmationPage() {
  const { shippingInfo, paymentInfo, orderSummary, clearCheckoutData } = useCheckout();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!shippingInfo || !paymentInfo || !orderSummary) {
      setLocation('/');
    }
  }, [shippingInfo, paymentInfo, orderSummary, setLocation]);

  if (!shippingInfo || !paymentInfo || !orderSummary) {
    return null;
  }

  const handleContinueShopping = () => {
    clearCheckoutData();
  };

  const paymentMethodLabel = {
    'credit-card': 'Credit Card',
    'debit-card': 'Debit Card',
    'paypal': 'PayPal',
  }[paymentInfo.paymentMethod];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/10 p-6">
            <CheckCircle className="h-20 w-20 text-primary" data-testid="icon-success" />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" data-testid="text-confirmation-title">
          ORDER <span className="text-primary">CONFIRMED!</span>
        </h1>
        <p className="text-muted-foreground text-lg font-medium" data-testid="text-confirmation-message">
          Thank you for your order! We'll send you a confirmation email shortly.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 space-y-0">
            <Package className="h-5 w-5 text-primary" />
            <CardTitle data-testid="text-order-items-title">Order Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-4">
              {orderSummary.items.map(item => (
                <div key={item.id} className="flex gap-4" data-testid={`order-item-${item.id}`}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    {item.weight && (
                      <p className="text-sm text-muted-foreground">{item.weight}</p>
                    )}
                  </div>
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span data-testid="text-order-subtotal">${orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span data-testid="text-order-shipping">
                  {orderSummary.shipping === 0 ? 'FREE' : `$${orderSummary.shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between font-black text-lg border-t pt-2">
                <span>Total</span>
                <span className="text-primary" data-testid="text-order-total">
                  ${orderSummary.total.toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 space-y-0">
            <MapPin className="h-5 w-5 text-primary" />
            <CardTitle data-testid="text-shipping-summary-title">Shipping Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <p className="font-bold" data-testid="text-customer-name">{shippingInfo.name}</p>
            <p className="text-sm text-muted-foreground" data-testid="text-customer-email">{shippingInfo.email}</p>
            <p className="text-sm text-muted-foreground" data-testid="text-customer-address">
              {shippingInfo.address}
            </p>
            <p className="text-sm text-muted-foreground">
              {shippingInfo.city}, {shippingInfo.zipCode}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 space-y-0">
            <CreditCard className="h-5 w-5 text-primary" />
            <CardTitle data-testid="text-payment-summary-title">Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-bold" data-testid="text-payment-method">{paymentMethodLabel}</p>
            {paymentInfo.paymentMethod === 'paypal' && paymentInfo.paypalEmail && (
              <p className="text-sm text-muted-foreground mt-1">{paymentInfo.paypalEmail}</p>
            )}
            {(paymentInfo.paymentMethod === 'credit-card' || paymentInfo.paymentMethod === 'debit-card') && paymentInfo.cardNumber && (
              <p className="text-sm text-muted-foreground mt-1">
                •••• •••• •••• {paymentInfo.cardNumber.slice(-4)}
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <p className="font-bold">Order Processing</p>
                <p className="text-sm text-muted-foreground">
                  We're preparing your supplements for shipment
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <p className="font-bold">Shipping Confirmation</p>
                <p className="text-sm text-muted-foreground">
                  You'll receive tracking information via email
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <p className="font-bold">Delivery</p>
                <p className="text-sm text-muted-foreground">
                  Your order arrives within 3-5 business days
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Link href="/" onClick={handleContinueShopping}>
          <Button size="lg" className="font-bold px-10" data-testid="button-continue-shopping">
            CONTINUE SHOPPING
          </Button>
        </Link>
      </div>
    </div>
  );
}
