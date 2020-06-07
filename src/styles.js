export default (theme) => ({
  name: {
    color: "white",
  },
  button: {
    backgroundImage: "linear-gradient(to right, #fdc830, #f37335)",
    color: "white",
  },
  greenButton: {
    backgroundColor: "rgb(0, 204, 0)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(0, 204, 0)",
    },
  },
  redButton: {
    backgroundColor: "rgb(255, 51, 0)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(255, 51, 0)",
    },
  },
  card: {
    width: "auto",
  },
  cardHeader: {
    textAlign: "center",
    backgroundColor: "rgb(249, 122, 22)",
  },
  cardContent: {
    textAlign: "center",
    backgroundColor: "rgb(245, 146, 70)",
  },
  cardActions: {
    justifyContent: "center",
  },
});
