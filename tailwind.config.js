/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
	fontFamily: {
		cusmain: ['Sail', 'sans-serif'], 
		Jost: ['Jost'],
   },
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
			'2xl': "1536px",
				// => @media (min-width: 1536px) { ... }
		},
		container: {
			center: true,
			padding: {
				md: "3rem !important",
				lg: "6rem !important",
				xl: "8rem !important",
				'2xl': "10rem !important"
			},
			screens: {
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }
				'2xl': "1536px",
				// => @media (min-width: 1536px) { ... }
			},
		},
		extend: {
			colors: {
				"cus-primary": "#723e97",
        "cus-secondary": "#f5bd0e",
        "cus-side": "#675c58"
			},
		},
	},
 
  plugins: [require('flowbite/plugin')],
}

