
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  from: number;
  to: number;
};

export function Counter({ from, to }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          if(ref.current){
            ref.current.textContent = value.toFixed(0);
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to]);

  return <span ref={ref} />;
}
