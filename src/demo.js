import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  CurrentTimeIndicator,
  ViewSwitcher,
  Toolbar
} from "@devexpress/dx-react-scheduler-material-ui";
import CustomNowIndicator from "./components/CustomNowIndicator";

const currentDate = "2018-11-01";
const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting"
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym"
  }
];

export default () => (
  <Paper style={{ height: window.innerHeight - 20 }}>
    <Scheduler data={schedulerData}>
      <ViewState currentDate={currentDate} />
      <Toolbar />
      <ViewSwitcher />
      <DayView />
      <WeekView />
      <MonthView />
      <Appointments />
      <CurrentTimeIndicator
        updateInterval={60000}
        indicatorComponent={CustomNowIndicator}
      />
    </Scheduler>
  </Paper>
);
