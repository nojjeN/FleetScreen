function updateCalendars() { jsonString = [
  [
    {
      "start": {
        "dateTime": "2023-11-23T12:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-23T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-23T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-23T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-24T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-24T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-24T13:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-27T08:20:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-27T08:35:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-27T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-27T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-27T14:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-27T14:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-28T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-28T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-28T10:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-28T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    }
  ],
  [
    {
      "start": {
        "dateTime": "2023-11-24T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-24T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-11-24T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-24T13:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-27T08:20:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-27T08:35:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-27T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-27T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-11-27T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-27T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-28T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-28T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-11-28T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-28T12:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-29T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-29T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    }
  ],
  [
    {
      "start": {
        "dateTime": "2023-11-24T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-24T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-24T13:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-24T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-24T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-11-27T08:20:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-27T08:35:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-27T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-27T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-28T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-28T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-28T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-28T12:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-29T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-29T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-11-29T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-11-29T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    }
  ]
];const jsonData = JSON.parse(JSON.stringify(jsonString, null, 2)); const arrayOfArrays = jsonData.map(item => Object.values(item));setCurrentStatus(arrayOfArrays[0], 'philip-status');setCurrentStatus(arrayOfArrays[1], 'adam-status');setCurrentStatus(arrayOfArrays[2], 'andreas-status');} setInterval(updateCalendars, 5000);