---
description: This page provides information on the data collected by Appsmith.
---

# Telemetry

Telemetry in Appsmith refers to the collection of data about how users interact with the platform. This data helps the Appsmith team identify usage patterns, troubleshoot issues, and make informed decisions about new features and improvements. Telemetry can only be turned off in the enterprise edition of Appsmith Agents.

## Data collected by Appsmith

Appsmith is a lightweight proxy and **does not capture** any data returned by your APIs, databases, or third-party tools. All data captured from a self-hosted instance is completely anonymised for user information.
Appsmith does however store the documents synced via the knowledge sources feature into the vector database. To secure your data, you can self-host appsmith agents in the enterprise plan.

### Keep-alive ping

The Appsmith server sends a keep-alive ping every 2 hours to indicate that it's still running without any errors. This data is collected irrespective of whether telemetry is turned on or off.

```javascript title="sample keep-alive ping"
{
    "event": "FETCH_RELEASE_NOTES",
    "properties": {
        "time": 1704784217.602,
        "distinct_id": "609ce8fb4092701c69df9846",
        "$identified_id": "609ce8fb4092701c69df9846",
        "$import": true,
        "$insert_id": "75ddda7c-ba47-41e0-9578-7d3afaf05284",
        "$lib_version": "3.3.1",
        "$mp_api_endpoint": "api.mixpanel.com",
        "$mp_api_timestamp_ms": 1704784233604,
        "$source": "segment",
        "$user_id": "609ce8fb4092701c69df9846",
        "edition": "CE",
        "id": "609ce8fb4092701c69df9846",
        "instanceId": "609ce8fb4092701c69df9846",
        "mp_lib": "Segment Actions: analytics-java",
        "mp_processing_time_ms": 1704784233665,
        "originService": "cloud-services",
        "segment_source_name": "cloud-services",
        "type": "fetch-release-notes",
        "version": "v1.9.15"
    }
}
```

### Server setup ping
Appsmith server sends a ping first time a new instance is created. This data is collected irrespective of whether telemetry is turned on or off.

```javascript title="sample server-setup ping"
{
    "event": "Installation Setup Complete",
    "properties": {
        "time": 1704784091.249,
        "distinct_id": "659cf0bd504813315c336bf7",
        "$browser": "",
        "$city": "Mysore",
        "$identified_id": "659cf0bd504813315c336bf7",
        "$import": true,
        "$insert_id": "d684e7ed-1211-4518-a19c-8f22925526e0",
        "$lib_version": "3.3.1",
        "$mp_api_endpoint": "api.mixpanel.com",
        "$mp_api_timestamp_ms": 1704784101374,
        "$region": "Karnataka",
        "$source": "segment",
        "$user_id": "659cf0bd504813315c336bf7",
        "disable-telemetry": false,
        "email": "",
        "emailDomainHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "goal": "just exploring",
        "id": "659cf0bd504813315c336bf7",
        "instanceId": "659cf0bd504813315c336bf7",
        "ipAddress": "117.211.16.3", // IP address is of the server used to host the instance and not the client IP
        "mp_country_code": "IN",
        "mp_lib": "Segment Actions: analytics-java",
        "mp_processing_time_ms": 1704784101771,
        "name": "",
        "originService": "appsmith-server",
        "proficiency": "",
        "role": "frontend engineer",
        "segment_source_name": "ce",
        "subscribe-marketing": false, // If user subscribes to marketing updates, we get the name and email address as well along with above information
        "version": "v1.9.56"
    }
}

```

### Navigation and clicks

The client captures anonymous behavioral data around navigation and clicks.

```javascript title="Sample event"
{
  "anonymousId": "0b62ab60-02ad-4f69-a181-d9c5eb2f97fa",
  "context": {
    "ip": "49.207.192.209",
    "library": {
      "name": "analytics.js",
      "version": "4.0.4"
    },
    "locale": "en-US",
    "page": {
      "path": "/applications",
      "referrer": "https://dev.appsmith.com/applications",
      "search": "",
      "title": "Editor | Appsmith",
      "url": "https://dev.appsmith.com/applications"
    },
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36"
  },
  "event": "APPLICATIONS_PAGE_LOAD",
  "integrations": {},
  "messageId": "ajs-9176c8f5ebc607524746206ea6aa7502",
  "originalTimestamp": "2020-11-04T10:52:14.616Z",
  "properties": {},
  "receivedAt": "2020-11-04T10:52:14.750Z",
  "sentAt": "2020-11-04T10:52:14.618Z",
  "timestamp": "2020-11-04T10:52:14.748Z",
  "type": "track",
  "userId": "a3d8b23b9b0cac986af79f4826d009463f8dfc372f188934710115491b7665a1"
}
```

### Successful backend calls
The server shares anonymous information about successful query processes, new application creation, user logins, connections to additional plugins, etc. This data is only collected when telemetry is turned on. 

```javascript title="sample successful backend call"
{
    "context": {
        "library": {
            "name": "analytics-java",
            "version": "2.1.1"
        }
    },
    "event": "execute_ACTION_TRIGGERED",
    "integrations": {},
    "messageId": "0f6b07ee-0717-413-808c-c25b09c0468",
    "originalTimestamp": "2021-08-24T07:23:35.610Z",
    "properties": {
        "appId": "612465f87b2230debedfc6",
        "appMode": "edit",
        "appName": "APP1",
        "datasource": {
            "name": "Test App"
        },
        "instanceId": "612460418944011a10fa5b",
        "isExampleApp": false,
        "isSuccessfulExecution": true,
        "name": "Test",
        "orgId": "612464f7f230debedfc4",
        "originService": "appsmith-server",
        "pageId": "612465802230debedfc8",
        "pageName": "Page1",
        "pluginName": "PostgreSQL",
        "statusCode": "",
        "timeElapsed": 8,
        "type": "DB",
        "username": "70280e5d07e61e5e915e5d26ac8704bbd68d3f75ebad67ba439f4c354d7"
    },
    "receivedAt": "2021-08-24T07:23:39.996Z",
    "sentAt": "2021-08-24T07:23:39.885Z",
    "timestamp": "2021-08-24T07:23:35.721Z",
    "type": "track",
    "userId": "70280e5dd9e61e5e91526ac8704bbd68d3f75ebad67ba439f4c354d7",
}
```