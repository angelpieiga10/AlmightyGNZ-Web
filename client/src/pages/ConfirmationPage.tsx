import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function ConfirmationPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-chart-2/10 p-4">
              <CheckCircle className="h-16 w-16 text-chart-2" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2" data-testid="text-confirmation-title">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground mb-6" data-testid="text-confirmation-message">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
          <div className="space-y-2">
            <Link href="/">
              <Button className="w-full" data-testid="button-continue-home">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
