import { CircleXIcon } from "lucide-react";
import Link from "next/link";

function CancelOrderPage() {
  return (
    <div className="flex min-h-[calc(100vh-78px)] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <CircleXIcon className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Order Canceled
        </h1>
        <p className="mt-4 text-muted-foreground">
          We're sorry, but your order has been canceled due to an issue with
          payment processing. Please try again or contact our support team if
          you need assistance.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CancelOrderPage;
