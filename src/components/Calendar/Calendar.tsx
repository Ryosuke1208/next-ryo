"use client";

import { useState } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
} from "date-fns";

const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

const generateCalendar = (currentDate: Date) => {
  const startMonthDate = startOfMonth(currentDate);
  const startCalendarDate = startOfWeek(startMonthDate);
  const endMonthDate = endOfMonth(currentDate);
  const endDate = endOfWeek(endMonthDate);

  const calendar = [];
  let date = startCalendarDate;

  while (date <= endDate) {
    calendar.push(date);
    date = addDays(date, 1);
  }

  return calendar;
};

const SampleCalendar = () => {
  const currentDate = new Date();
  const [, setSelectedDate] = useState<Date | null>(null);
  const calendar = generateCalendar(currentDate);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    console.log("選択した日付:", date);
  };

  return (
    <Container>
      <Box display="flex" alignItems="center" flexDirection="column" mt={4}>
        <Typography variant="h4" gutterBottom>
          {format(currentDate, "yyyy年MM月")}
        </Typography>
        <Grid container spacing={1}>
          {daysOfWeek.map((day) => (
            <Grid item xs={1.7} key={day}>
              <Typography align="center">{day}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={0}>
          {calendar.map((date, index) => (
            <Grid item xs={1.7} key={index}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onClick={() => handleDateClick(date)}
              >
                <Box textAlign="center" sx={{ width: "100%", p: 0, mb: 1 }}>
                  {format(date, "d")}
                </Box>
                <Typography>0/0</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SampleCalendar;
