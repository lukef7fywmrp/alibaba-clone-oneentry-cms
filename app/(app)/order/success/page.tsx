"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useCartStore } from "@/store/cartStore";
import confetti from "canvas-confetti";
import { CheckIcon } from "lucide-react";
import { useEffect } from "react";

function OrderSuccessPage() {
  const clearItems = useCartStore((state) => state.clearItems);

  useEffect(() => {
    clearItems();
  }, [clearItems]);

  useEffect(() => {
    triggerConfettiEffect();
  }, []);

  const triggerConfettiEffect = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-78px)] bg-background">
      <div className="relative w-full max-w-md px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-5">
          <BlurFade delay={0.25} inView>
            <div className="bg-primary rounded-full p-4">
              <CheckIcon className="w-12 h-12 text-primary-foreground" />
            </div>
          </BlurFade>
          <BlurFade delay={0.25 * 1} inView>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Congratulations!
            </h1>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className="text-muted-foreground text-center">
              Thank you for your order. We appreciate your business and look
              forward to serving you again.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

export default OrderSuccessPage;
