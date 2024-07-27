'use client'

import { useEffect, useState } from 'react'

import {
	SCREEN_LG,
	SCREEN_MD,
	SCREEN_XL,
	SCREEN_XS,
	SCREEN_XXL
} from '../constants/breakpoints.constants'

export const useResize = () => {
	const [width, setWidth] = useState(0)
	const handleResize = () => {
		setWidth(window.innerWidth)
	}
	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return {
		width,
		isScreenXS: width <= SCREEN_XS,
		isScreenSm: width <= SCREEN_MD && width > SCREEN_XS,
		isScreenMd: width <= SCREEN_LG && width > SCREEN_MD,
		isScreenLg: width <= SCREEN_XL && width > SCREEN_LG,
		isScreenXl: width <= SCREEN_XXL && width > SCREEN_XL,
		isScreenXxl: width >= SCREEN_XXL
	}
}
