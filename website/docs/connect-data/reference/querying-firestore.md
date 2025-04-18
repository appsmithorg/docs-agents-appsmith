---
sidebar_position: 6
description: Connect Appsmith to a Firestore database and create queries.
---

# Firestore

This page provides information for connecting your application to your Firestore database and for using queries to manage its content.

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Firestore database.

<ZoomImage src="/img/firestore-datasource-config.png" alt="Configuring a Firestore datasource." caption="Configuring a Firestore datasource." />

#### Database URL

<dd>

The domain or network location of your database instance. This value includes your **Project ID** in the format 

```
https://PROJECT_ID.firebaseio.com
```

</dd>

#### Project ID

<dd>

The unique identifier for your Firestore project, accessible in your Firebase project's **Project Settings**. For more information, see [Understand Firebase projects](https://firebase.google.com/docs/projects/learn-more#project-id).

</dd>

#### Service account credentials

<dd>

Service account credentials are used to authenticate your queries to Firestore. To obtain them:

1. In the Firebase console, navigate to **Project Settings** > **Service accounts**, and click Generate new private key to download the JSON file.

2. Open the downloaded JSON file and copy its contents.

3. Paste the copied credentials into the **Service account credentials** field in your Appsmith datasource configuration.


</dd>

## Create queries

The following section is a reference guide that provides a complete description of all the read and write operation commands with their parameters to create Firestore queries.

<ZoomImage src="/img/firestore-query-config.png" alt="Configuring a Firestore query." caption="Configuring a Firestore query." />

### List Documents

This command lists all documents from a given collection. The following section lists all the fields available for the **List Documents** command.

#### Collection Name

<dd>

The name of the collection to query.

</dd>

#### Where

<dd>

Defines conditions that documents' column values must meet to appear in your results. The available comparison operators are `==`, `<`, `<=`, `>=`, `>`, `in`, `contains`, and `contains any`.

</dd>
<dd>
    <i>Options:</i>
  <ul>
    <li><b>Add condition:</b> Adds another simple single-line expression.</li>
    <li><b>Add group condition:</b> Adds a nested expression with multiple levels of <code>AND</code> statements.</li>
  </ul>
</dd>
<dd>
  <ZoomImage src="/img/firestore-where-conditions.png" alt="Use Where conditions to create multiple levels of filtering." caption="Use Where conditions to create multiple levels of filtering." />
</dd>

#### Order by

<dd>

Sorts query results by a column value. Expects a JSON array containing a single string which is the column's name. By default this sorts in ascending order, or you can add a `-` prefix to the column name to sort in descending order. For example, `["name"]` is ascending and `["-name"]` is descending.

</dd>

#### Start after

<dd>

Sets a record that acts as a starting cursor for pagination in Firestore. Expects an object that is a whole document, i.e. a document that was returned from a prior query. For example, you can pass the last record from the most recent execution of a query:

*Example:* 

```javascript
//Table example
{{ user_Table.tableData[user_Table.tableData.length - 1] }}

//List example
{{ users_List.data[users_List.data.length - 1] }}
```

Each time the query is run, it fetches the next set of results that come after the previous execution.

</dd>

#### End before

<dd>

Sets a record that acts as an ending cursor for pagination. Expects an object that is a whole document, i.e. a document that was returned from a prior query. For example, you can pass the first record from the most recent execution of a query:

```javascript
{{ user_Table.tableData[0] }}
```

When the query is paged backwards, it fetches the set of results that lead up to the current results.

</dd>

#### Limit

<dd>

Sets a limit for how many documents may be returned by the query.

</dd>

### Create Document

The Create Document command allows you to create a new document in a Firestore collection. To do this, you need to specify both the **collection name** and a unique **document reference** (or document ID). 


#### Collection Name

<dd>

This is the path where the new document will be created. You need to specify both the collection name and a document reference (or ID) in the format:

```js
collection-name/document-id
```

*Example:* if you are creating a document in the `Users` collection with the document ID `user123`, the collection name field should be:

```js
Users/user123
```

</dd>

#### Body

<dd>

Expects a JSON object that represents the document to be created. For example:

```javascript
{
	"name": {{ NameInput.text }},
	"email": {{ EmailInput.text }},
	"date_of_birth": {{ DatePicker.selectedDate }}
}
```

</dd>

#### Timestamp Path

<dd>

When filled, adds a timestamp key-value pair into the created document that shows when the document was created. Expects an array with a single string value, for example `["TIMESTAMP_KEY_NAME"]`. The string you provide in this field is used as the key to the timestamp value in your document. You can create a timestamp key-value pair within a nested object by using `.` to specify the path.

</dd>
<dd>

For example, the value <code>["meta.dateCreated"]</code> adds the following to your document:

```json
{
  "meta": {
    "dateCreated": {
      "seconds": 1681997026,
      "nanos": 409000000
    },
  },
  // ...
}
```

</dd>

### Update Document

The Update Document command allows you to modify an existing document at a specified path in Firestore. 

You can update one or more fields in the document without affecting the other fields. If a field in the update does not already exist in the document, Firestore adds it. If the document is not found at the provided path, Firestore returns an error.


#### Collection/Document path

<dd>

The path to the document that you want to update. The path must include both the collection name and the document reference.

*Example:* 

```js
Profiles/user123
```

</dd>

#### Body

<dd>

Expects a JSON object that represents the new key-value pairs to update the document with. You only need to include the key-value pairs that are changing, adding all keys is not necessary. For example:

```javascript
{
	"name": {{ NameInput.text }}
}
```

</dd>

#### Delete Key Path

<dd>

When filled, deletes the key located at the path specified by this field. You can delete nested keys by providing the path from the root of the object. Expects an array with a single string value, for example `["PARENT_KEY.KEY_TO_DELETE"]`.

</dd>

#### Timestamp Path

<dd>

When filled, adds a timestamp key-value pair into the created document that shows when the document was updated. Expects an array with a single string value, for example `["TIMESTAMP_KEY_NAME"]`. The string you provide in this field is used as the key to the timestamp value in your document. You can create a timestamp key-value pair within a nested object by using `.` to specify the path.

</dd>
<dd>
  
For example, the value <code>["meta.lastModified"]</code> adds the following to your document:

```json
{
  "meta": {
    "lastModified": {
      "seconds": 1681997026,
      "nanos": 409000000
    },
  },
  // ...
}
```

</dd>

### Delete Document

This command deletes an existing document at a given path. You must specify the collection name and document reference (ID) in the path to ensure the correct document is deleted. The following section lists all the fields available for the **Delete Document** command.

#### Collection/Document path

<dd>

The path to the document you want to delete. The path should include both the collection name and the document reference (ID).

*Example:* if you want to delete a document representing a user profile, where `user123` is the document to be deleted.

```js
Profiles/user123
```

</dd>

### Get Document

This command fetches a single existing document at a specified path. You need to provide the full collection and document reference (ID) to retrieve the correct document. The following section lists all the fields available for the **Get Document** command.

#### Collection/Document path

<dd>


The path to the document you want to fetch. The path must include both the collection name and the document reference (ID). 

*Example:* 

```js
Profiles/JohnDoe
```


</dd>

### Upsert Document

This command creates a new document or replaces an existing document at the given path. The following section lists all the fields available for the **Upsert Document** command.

If you use **Upsert Document**, your query completely replaces whatever record exists at the given path, so be sure to provide all necessary fields including those that have not changed.

#### Collection/Document path

<dd>

The path to the document to update. For example, the path `Users/Admins/admin001` refers to a document `admin001` in the the `Admins` directory of the `Users` Collection.

</dd>

#### Body

<dd>

Expects a JSON object that represents the document to be created. If a document already exists at the path given in **Collection/Document path**, this command completely replaces it with the content of this field. For example:

```javascript
{
	"name": {{ NameInput.text }},
	"email": {{ EmailInput.text }},
	"date_of_birth": {{ DatePicker.selectedDate }}
}
```

</dd>

#### Timestamp Path

<dd>

When filled, adds a timestamp key-value pair into the created document that shows when the document was created. Expects an array with a single string value, for example `["TIMESTAMP_KEY_NAME"]`. The string you provide in this field is used as the key to the timestamp value in your document. You can create a timestamp key-value pair within a nested object by using `.` to specify the path.

</dd>
<dd>

For example, the value <code>["meta.dateCreated"]</code> adds the following to your document:

```json
{
  "meta": {
    "dateCreated": {
      "seconds": 1681997026,
      "nanos": 409000000
    },
  },
  // ...
}
```

</dd>

### Add document to collection

This command creates a new document within a specified Firestore collection. Unlike the Create Document command, this command does not require you to specify a document ID; instead, Firestore will automatically generate a unique identifier for the document.

#### Collection/Document path

<dd>

The path to the collection where the new document should be added. You only need to provide the **collection name**. 

*Example:* if you want to add a new user to the `Users` collection, set the collection path to `Users`, and Firestore will create a unique `document ID`.

```js
Users
```

</dd>

#### Body

<dd>

Expects a JSON object that represents the document to be created. For example:

```javascript
{
	"name": {{ NameInput.text }},
	"email": {{ EmailInput.text }},
	"date_of_birth": {{ DatePicker.selectedDate }}
}
```

</dd>

#### Timestamp Path

<dd>

When filled, adds a timestamp key-value pair into the created document that shows when the document was created. Expects an array with a single string value, for example `["TIMESTAMP_KEY_NAME"]`. The string you provide in this field is used as the key to the timestamp value in your document. You can create a timestamp key-value pair within a nested object by using `.` to specify the path.

</dd>
<dd>
  
For example, the value <code>["meta.dateCreated"]</code> adds the following to your document:

```json
{
  "meta": {
    "dateCreated": {
      "seconds": 1681997026,
      "nanos": 409000000
    },
  },
  // ...
}
```

</dd>

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](https://docs.appsmithai.com/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.

## See also

- [Display and Lookup Data in Table](https://docs.appsmithai.com//build-apps/how-to-guides/display-search-and-filter-table-data) - Learn how to display query results in a Table and enable users to look up data with ease.
- [Search and Filter Table Data](https://docs.appsmithai.com//build-apps/how-to-guides/search-and-filter-table-data) - Guide on adding search and filter functionality to Tables for better data navigation.
- [Update Data](https://docs.appsmithai.com//build-apps/how-to-guides/submit-form-data) - Understand how to update data in your application using Form widget.
- [Insert Data](https://docs.appsmithai.com//build-apps/how-to-guides/insert-data) - Step-by-step instructions on inserting new records into your database using Form widget.
