/** @type {Plugin} */
const plugin = require('tailwindcss/plugin');
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "",
            screens: {
                "2xl": "1182px",
            },
        },
        extend: {
            backgroundImage: {
                'custom-gradient': 'linear-gradient(107.07deg, #07B0F3 0.56%, #C1EEFF 132.85%)',
            },
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
            },
            fontSize: {
                '50px': ['50px', '59.25px'],
                '23px': ['23px', '27.26px'],
                '28px': ['28px', '33.18px'],
            },
            lineHeight: {
                '59.25': '59.25px',
                '27.26px': '27.26px',
                '33.18px': '33.18px',
                '88.25px':'88.25px',
            },
            fontWeight: {
                '300': '300',
                '400': '400',
                '500': '500',
                '600': '600',
                '700': '700',
                '800': '800',
                '900': '900',
            },
            rounded: {
                '50px': '50px',
            },
            boxShadow: {
                custom: '3px 4px 5.8px 0px rgba(0, 0, 0, 0.25)',
                customTwo: '4px 2px 8.9px 1px rgba(0, 0, 0, 0.25)'
            },
            colors: {
                customGrey: "#F0F0F0",
                customGreyTwo: "#909090",
                customGreen: "#0AA931",
                customBlue: "#2D95E4",
                customBorderGrey:"#909090",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        plugin(function({ addUtilities }) {
            addUtilities({
                '.bg-custom-gradient': {
                    'background-image': 'linear-gradient(107.07deg, #07B0F3 0.56%, #C1EEFF 132.85%)',
                }
            });
        })
    ]
}