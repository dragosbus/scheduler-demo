import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";
import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";

const useStyles = makeStyles((theme) => ({
  line: {
    height: "2px",
    borderTop: `2px ${theme.palette.primary.main} dotted`,
    width: "100%",
    transform: "translate(0, -1px)"
  },

  nowIndicator: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    top: ({ top }) => top
  }
}));

const CustomNowIndicator = ({ top, ...restProps }) => {
  const classes = useStyles({ top });
  return (
    <div {...restProps}>
      <div className={cn(classes.nowIndicator, classes.line)} />
    </div>
  );
};

export default CustomNowIndicator;
