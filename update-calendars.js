function updateCalendars() { jsonString = [
  [
    {
      "start": {
        "dateTime": "2023-11-30T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-30T09:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "oof"
    },
    {
      "start": {
        "dateTime": "2023-11-30T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T11:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-30T12:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-01T07:45:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T08:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T08:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-01T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T13:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T16:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    }
  ],
  [
    {
      "start": {
        "dateTime": "2023-11-30T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-30T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T11:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-30T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T08:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-01T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-01T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-12-01T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-01T13:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-01T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T16:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T16:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T20:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    }
  ],
  [
    {
      "start": {
        "dateTime": "2023-11-30T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-30T10:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T12:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-30T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T11:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-30T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-30T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T08:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-01T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T13:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T16:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-01T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-01T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    }
  ]
];const jsonData = JSON.parse(JSON.stringify(jsonString, null, 2)); const arrayOfArrays = jsonData.map(item => Object.values(item));setCurrentStatus(arrayOfArrays[0], 'philip-status');setCurrentStatus(arrayOfArrays[1], 'adam-status');setCurrentStatus(arrayOfArrays[2], 'andreas-status');} setInterval(updateCalendars, 2000);