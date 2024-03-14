/** @type {import('tailwindcss').Config} */
const strapiSafeList = ['grid-cols-3', 'grid-rows-1', 'grid-flow-rows', 'text-center'];

module.exports = { 
	safelist: strapiSafeList,
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {}, 
	}, 
	plugins: [], 
}