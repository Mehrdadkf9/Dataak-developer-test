module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dataakPrimary: "#199da3",
        dataakSuccess: "#66CB9F",
        dataakError: "#F16063",
        dataakGray: "#eeeeee",
        dataakWhite: "#f9f9f9",
      },
      borderRadius: {
        circle: "50%",
      },
      boxShadow: {
        topBar: "0px 3px 50px -1px rgba(50, 50, 71, 0.05)",
        modal:
          "0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px rgba(12, 26, 75, 0.24)",
      },
    },
  },
  plugins: [],
};
