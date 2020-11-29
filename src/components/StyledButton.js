import { Button, withStyles } from "@material-ui/core";

const StyledButton = withStyles((theme) => ({
  root: {
    color: "#22223a",
    backgroundColor: "#E17C69",
    fontWeight: 800,
    borderRadius: 0,
    transition: "0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#F6B1A4",
    },
  },
}))(Button);

export default StyledButton;
