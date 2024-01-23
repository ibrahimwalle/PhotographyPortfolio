
import { useRef, useEffect, ReactNode } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyboxProps {
    delegate?: string;
    options?: object;
    children: ReactNode;
}

function Fancybox(props: FancyboxProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || "[data-fancybox]";
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    }, [props.delegate, props.options]);

    return <div className="flex flex-wrap w-full" ref={containerRef}>{props.children}</div>;
}

export default Fancybox;