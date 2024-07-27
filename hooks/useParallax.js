import { useScroll, useTransform } from 'framer-motion'

export function useParallax() {
	const { scrollYProgress } = useScroll()
	const scale = useTransform(scrollYProgress, [0, 1], ['1', '0.8'])
	const opacity = useTransform(scrollYProgress, [0, 0.2], ['1', '.4'])
	return { scale, opacity }
}
