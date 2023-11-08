/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/views/**/*.vue',
        './src/views/*.vue',
        './src/components/*.vue',
        './src/components/**/*.vue',
        './src/views/*.vue',
        './src/views/**/*.vue',
        './src/layouts/*.vue',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ], 
    plugins: [],
    theme: {
        extend: {
            colors: {
                'primary': '#7142E1',
                'border': {
                    'light':'#EFEFEF',
                    'default':'#E6E6E6',
                    'hover':'#E0E0E0',
                    'dark':'#DBDBDB',
                    'disabled':'#F4F4F4'
                },
                'text': {
                    300: '#ACACAC',
                    400: '#6E6E6E',
                    500: '#303030',
                    600: '#222222',
                    700: '#131313'
                },
                'primary': {
                    100: '#E0D8F5',
                    200: '#C2B1EA',
                    300: '#A389E0',
                    400: '#8562D5',
                    500: '#522FA2',
                    600: '#3D237A',
                    700: '#291851',
                    800: '#140C29',
                    900: '#663BCB'
                },
                'information': {
                    100: '#D9E2FF',
                    200: '#B3C6FF',
                    300: '#8CA9FF',
                    400: '#668DFF',
                    500: '#335ACC',
                    600: '#264399',
                    700: '#1A2D66',
                    800: '#0D1633',
                    900: '#4070FF'
                },
                'success': {
                    100: '#CDF2E6',
                    200: '#9BE5CC',
                    300: '#6AD7B3',
                    400: '#38CA99',
                    500: '#059766',
                    600: '#04714D',
                    700: '#024C33',
                    800: '#01261A',
                    900: '#06BD80'
                },
                'warning': {
                    100: '#FFF5DA',
                    200: '#FFEAB5',
                    300: '#FFE08F',
                    400: '#FFD56A',
                    500: '#CCA237',
                    600: '#997A29',
                    700: '#66511C',
                    800: '#33290E',
                    900: '#FFCB45',
                },
                'error': {
                    100: '#FEDFDD',
                    200: '#FDBFBB',
                    300: '#FDA09A',
                    400: '#FC8078',
                    500: '#C94D45',
                    600: '#973A34',
                    700: '#642622',
                    800: '#321311',
                    900: '#FB6056',
                },

            }
        }
    }
};