function updateCalendars() { jsonString = [
  [
    {
      "start": {
        "dateTime": "2023-11-16T12:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-16T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-16T14:10:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-16T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-17T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-17T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T11:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-17T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-17T13:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-17T14:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T14:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-20T08:20:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T08:35:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-20T09:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T10:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-20T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    }
  ],
  [
    {
      "start": {
        "dateTime": "2023-11-17T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-17T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-11-17T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T11:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-17T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-17T13:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-20T08:20:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T08:35:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-20T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-11-20T09:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T10:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-20T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-21T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-21T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    }
  ],
  [
    {
      "start": {
        "dateTime": "2023-11-17T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-17T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T11:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-17T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-17T13:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-17T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-17T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-11-20T08:20:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T08:35:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-20T09:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T10:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-20T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-20T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-21T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-21T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-21T09:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-21T09:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    }
  ]
];const jsonData = JSON.parse(JSON.stringify(jsonString, null, 2)); const arrayOfArrays = jsonData.map(item => Object.values(item));setCurrentStatus(arrayOfArrays[0], 'philip-status');setCurrentStatus(arrayOfArrays[1], 'adam-status');setCurrentStatus(arrayOfArrays[2], 'andreas-status');} setInterval(updateCalendars, 5000);