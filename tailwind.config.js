/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["report/report.php", "login.php", "register.html", "report/reportHistory.php"],
    theme: {
      extend: {
        colors: {
          'custom-black': '#242121',
          'custom-purple': '#5065A8',
          'custom-dark-blue': '#0e0d2f',
          'custom-light-blue': '#0bc1f5'
        },
      },
    },
    plugins: [],
  
  }