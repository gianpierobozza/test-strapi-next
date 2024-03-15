/** @type {import('tailwindcss').Config} */
const strapiSafeList = ['grid-cols-3', 'grid-rows-1', 'grid-flow-row', 'text-center', 'order-1', 'order-2'];

module.exports = { 
	safelist: strapiSafeList,
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {}, 
	}, 
	plugins: [], 
}