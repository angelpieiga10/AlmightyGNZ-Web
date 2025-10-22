import { useCart } from '@/contexts/CartContext';
import { useCheckout } from '@/contexts/CheckoutContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useLocation } from 'wouter';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, Banknote } from 'lucide-react';
import { SiPaypal } from 'react-icons/si';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const paymentSchema = z.discriminatedUnion('paymentMethod', [
  z.object({
    paymentMethod: z.literal('credit-card'),
    cardNumber: z.string().min(1, 'Card number is required'),
    cardName: z.string().min(1, 'Cardholder name is required'),
    expiryDate: z.string().min(1, 'Expiry date is required'),
    cvv: z.string().min(3, 'CVV must be at least 3 digits'),
    paypalEmail: z.string().optional(),
  }),
  z.object({
    paymentMethod: z.literal('debit-card'),
    cardNumber: z.string().min(1, 'Card number is required'),
    cardName: z.string().min(1, 'Cardholder name is required'),
    expiryDate: z.string().min(1, 'Expiry date is required'),
    cvv: z.string().min(3, 'CVV must be at least 3 digits'),
    paypalEmail: z.string().optional(),
  }),
  z.object({
    paymentMethod: z.literal('paypal'),
    paypalEmail: z.string().min(1, 'PayPal email is required').email('Invalid email address'),
    cardNumber: z.string().optional(),
    cardName: z.string().optional(),
    expiryDate: z.string().optional(),
    cvv: z.string().optional(),
  }),
]);

type PaymentFormData = z.infer<typeof paymentSchema>;

export default function PaymentPage() {
  const { cart, subtotal, shipping, total, clearCart } = useCart();
  const { shippingInfo, setPaymentInfo, setOrderSummary } = useCheckout();
  const [, setLocation] = useLocation();

  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentMethod: 'credit-card',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      paypalEmail: '',
    },
  });

  const paymentMethod = form.watch('paymentMethod');

  if (!shippingInfo || cart.length === 0) {
    setLocation('/checkout');
    return null;
  }

  const onSubmit = (data: PaymentFormData) => {
    setOrderSummary({
      items: cart,
      subtotal,
      shipping,
      total,
    });
    setPaymentInfo(data);
    clearCart();
    setLocation('/confirmation');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-black mb-8 tracking-tight" data-testid="text-payment-title">
        PAYMENT <span className="text-primary">METHOD</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle data-testid="text-payment-details">Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Payment Method</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-3"
                        >
                          <div className="flex items-center space-x-3 p-4 rounded-md border-2 hover-elevate active-elevate-2 cursor-pointer"
                            onClick={() => field.onChange('credit-card')}
                            data-testid="radio-credit-card"
                          >
                            <RadioGroupItem value="credit-card" id="credit-card" />
                            <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                              <CreditCard className="h-5 w-5" />
                              <span className="font-bold">Credit Card</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-4 rounded-md border-2 hover-elevate active-elevate-2 cursor-pointer"
                            onClick={() => field.onChange('debit-card')}
                            data-testid="radio-debit-card"
                          >
                            <RadioGroupItem value="debit-card" id="debit-card" />
                            <Label htmlFor="debit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Banknote className="h-5 w-5" />
                              <span className="font-bold">Debit Card</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-4 rounded-md border-2 hover-elevate active-elevate-2 cursor-pointer"
                            onClick={() => field.onChange('paypal')}
                            data-testid="radio-paypal"
                          >
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="flex items-center gap-2 cursor-pointer flex-1">
                              <SiPaypal className="h-5 w-5" />
                              <span className="font-bold">PayPal</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {(paymentMethod === 'credit-card' || paymentMethod === 'debit-card') && (
                  <>
                    <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Card Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="1234 5678 9012 3456"
                              {...field}
                              data-testid="input-card-number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cardName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cardholder Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              data-testid="input-card-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiry Date</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="MM/YY"
                                {...field}
                                data-testid="input-expiry"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="cvv"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVV</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="123"
                                {...field}
                                data-testid="input-cvv"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}

                {paymentMethod === 'paypal' && (
                  <FormField
                    control={form.control}
                    name="paypalEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PayPal Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                            data-testid="input-paypal-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <Button
                  type="submit"
                  className="w-full font-bold"
                  data-testid="button-complete-order"
                >
                  COMPLETE ORDER
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle data-testid="text-shipping-summary">Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p className="font-bold">{shippingInfo.name}</p>
              <p>{shippingInfo.email}</p>
              <p>{shippingInfo.address}</p>
              <p>{shippingInfo.city}, {shippingInfo.zipCode}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle data-testid="text-order-summary">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm" data-testid={`text-payment-item-${item.id}`}>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-black text-lg">
                    <span>Total</span>
                    <span className="text-primary" data-testid="text-payment-total">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
