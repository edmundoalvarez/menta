import { motion } from "framer-motion";

export const GlitchText = ({ children }: { children: string }) => {
    return (
        <motion.span
            className="text-primary inline-block"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{
                opacity: [0, 1, 0.2, 1],
                filter: ["blur(4px)", "blur(1px)", "blur(0px)"],
            }}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
            }}
            viewport={{ once: true }}
        >
            {children}
        </motion.span>
    );
};
