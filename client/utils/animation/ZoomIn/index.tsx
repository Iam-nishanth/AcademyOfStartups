import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface RevealProps {
    children: JSX.Element
    width?: "fit-content" | "100%"
}

export const ZoomIn = ({ children, width = "fit-content" }: RevealProps) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
    const mainControls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref} style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </div>
    )
}
