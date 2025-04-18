---
sidebar_position: 7
description: Connect Appsmith to Google Sheets and create queries.
---

# Google Sheets

This page provides information for connecting Appsmith to Google Sheets and for reading and writing data in your applications.

## Connection parameters

<ZoomImage src="/img/gsheets_datasource_config.png" alt="Configuring a new Google Sheets datasource." caption="Configuring a new Google Sheets datasource." />

#### Permissions | Scope:

<dd>Defines the privileges your app has when querying spreadsheets. Use this to allow the minimum necessary privileges for your app's functions.</dd><br/>
<dd>

Options:

- **Read / Write / Delete | Selected Google Sheets:** Your app has full access (read, write, and delete) only to the specific sheets you authorize. It can modify data, delete rows, remove sheets, and even delete entire spreadsheets, but only for the selected files.

- **Read / Write / Delete | All Google Sheets:** Your app has full access to all spreadsheets in your Google account. This includes the ability to read and modify data, delete specific rows, remove entire sheets, and even delete entire spreadsheets. 

- **Read / Write | All Google Sheets:** Your app can read and modify all spreadsheets in your Google account but cannot delete entire sheets or spreadsheets. However, it can update cell values, modify rows, and clear data within sheets.

- **Read | All Google Sheets:** Your app has read-only access to all spreadsheets in your Google account. It can fetch and display data but cannot make any modifications, including editing or deleting content.

Clicking **Save and Authorize** prompts you to log in to your Google account, where you can grant access and select the sheets your app can use.



</dd>


## Query Google Sheets

The following section is a reference guide that provides a complete description of all the parameters to connect to Google Sheets.

<ZoomImage src="/img/gsheets-query-config.png" alt="Configuring a query from the query screen." caption="Configuring a query from the query screen." />

### Fetch Details

This command fetches metadata for a given **Spreadsheet** entity. The following section lists all the fields available for the **Fetch Details** command.

#### Entity

<dd>Sets which entity type to query</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Spreadsheet:</b> Returns metadata for a spreadsheet document.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>


### Insert One

This command inserts a given entity type: **Sheet Row(s)** or **Spreadsheet**. The following section lists all the fields available for the **Insert One** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>

  - **Sheet Row(s):** Inserts a single record as a row in the spreadsheet.
   - **Spreadsheet:** Creates a new spreadsheet document. Optionally, use the **Row Objects** field to add rows during creation. The **Spreadsheet** option is available if the datasource has access to all spreadsheets. If access is restricted to selected sheets, the **Spreadsheet** option is disabled.

</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.</dd>

#### Row Object

<dd>Available when the <b>Entity</b> is <b>Sheet Row(s)</b>. This expects a JSON-formatted object whose key/value pairs represent the columns and values from your table record.</dd>
<dd>
<i>Example:</i>
<pre>{`{
  "name": {{ UserForm.name }},
  "email": {{ UserForm.email }},
  "status": "pending"
}`}</pre>
</dd>

  #### Row Objects

  <dd>Available when the <b>Entity</b> is <b>Spreadsheet</b>. This expects an array of JSON-formatted objects whose key/value pairs represent columns and values to add to your new spreadsheet when it is created.</dd>
  <dd>
  <i>Example:</i>
  <pre>{`[{
    "name": "Kim",
    "email": "hkim@example.com",
    "status": "accepted"
},
{
  "name": "Amal",
  "email": "samal@example.com",
  "status": "accepted"
}]`}</pre>
</dd>


### Update One

This command updates a **Sheet Row(s)** entity. The following section lists all the fields available for the **Update One** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Updates a single existing row in the spreadsheet.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>
The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
</dd>

#### Update Row Object

<dd>A JSON-formatted object whose key/value pairs represent the columns and values from your table record. You must include a <code>rowIndex</code> key to specify which record to update. If you fetched the record from another Google Sheets query, this index value should be available on its <code>rowIndex</code> property.</dd>

<dd>

*Example:*

```js
//For JSON Form: {{JSONForm1.formData.id}} 
//For Table inline editing: {{ Table1.updatedRow.id }}

{{
    {
        rowIndex: Table1.selectedRow.rowIndex, // includes rowIndex key
        "id": Form1.data.TextID, 
        "name": Form1.data.InputName, 
        "country": Form1.data.SelectCountry 
       
    }
}}
```

See [Update single row](https://docs.appsmithai.com/connect-data/how-to-guides/insert-and-update-data-in-google-sheets#update-single-row) guide.


</dd>


### Delete One

This command deletes a given entity: **Sheet Row(s)**, **Spreadsheet**, or **Sheet**. The following section lists all the fields available for the **Delete One** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Deletes a single row of a spreadsheet.</li>
    <li><b>Spreadsheet:</b> Deletes a new spreadsheet document.</li>
    <li><b>Sheet:</b> Deletes a page from a spreadsheet document.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Row Index

<dd>The index of the record to delete from the spreadsheet. If you fetched the record from another Google Sheets query, this index value should be available on its <code>rowIndex</code> property.</dd>


### Fetch Many

This command fetches a given entity type: **Sheet Row(s)** or **Spreadsheet**. The following section lists all the fields available for the **Fetch Many** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>

  - **Sheet Row(s)**: Fetches a subset of horizontal records from a page of a spreadsheet document.
  - **Spreadsheet**: Fetches a list of existing spreadsheet documents. 

</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>
  The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
</dd>

#### Filter Format

<dd>
  Sets the method of selecting records from your spreadsheet.
</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Where Clause:</b> Fetches records based on logic and conditions. This also allows you to sort and paginate your results.</li>
    <li><b>Cell Range:</b> Fetches a block of spreadsheet cells defined by spreadsheet-style notation, such as `A2:B7`.</li>
  </ul>
</dd>

<p>The following settings are available when <b>Filter Format</b> is set to <b>Where Clause</b>:</p>

#### Filter By

<dd>This is used to build expressions that return records when a column value meets some criteria. You can evaluate records using `in`, `not in`, `contains`, and logic operators.</dd>
<dd>
  <i>Buttons:</i>
  <ul>
    <li><b>Add Condition:</b> Adds another simple single-line expression.</li>
    <li><b>Cell Range:</b> Adds a nested expression with multiple levels of And/Or statements.</li>
  </ul>
</dd>

#### Sort By

<dd>Sorts the resulting records according to the specified column.</dd>
<dd>
  <i>Buttons:</i>
  <ul>
    <li><b>Add Parameter:</b> Adds another column for sorting on multiple levels.</li>
  </ul>
</dd>

#### Pagination Limit

<dd>Limits the number of records you can receive in a single response. Use with <b>Pagination Offset</b> to implement pagination for large datasets.</dd>

#### Pagination Offset

<dd>Allows skipping a given number of records before returning results. Use with <b>Pagination Limit</b> to implement pagination for large datasets.</dd>

<p>The following setting is available when <b>Filter Format</b> is set to <b>Cell Range</b>:</p>

#### Cell Range

<dd>This mode uses Google Sheets' row number and column letter syntax (such as `A1-B14`) to select cells. Even when the column header row isn't part of your selection, your fetched data still includes the column labels for your selected cells. This mode doesn't allow conditions, sorting, or pagination.</dd>

<p>
<br/>
See how-to guide on [Fetch and Filter Data from Google Sheets](https://docs.appsmithai.com/connect-data/how-to-guides/filter-data-google-sheet).
</p>

### Insert Many

This command inserts multiple **Sheet Row(s)** entities. The following section lists all the fields available for the **Insert Many** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Inserts several records as a rows in the spreadsheet.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>
  The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
</dd>

#### Row Objects

<dd>Expects an array of JSON-formatted objects whose key/value pairs represent columns and values to add to the spreadsheet.</dd>
<dd>
<i>Example:</i>
<pre>{`[{
    "name": "Kim",
    "email": "hkim@example.com",
    "status": "accepted"
},
{
  "name": "Amal",
  "email": "samal@example.com",
  "status": "accepted"
}]`}</pre>
</dd>

See how-to guide on [Insert and Update Data in Google Sheets](https://docs.appsmithai.com/connect-data/how-to-guides/insert-and-update-data-in-google-sheets).

### Update Many

This command updates multiple **Sheet Row(s)** entities. The following section lists all the fields available for the **Update Many** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Updates multiple existing rows in the spreadsheet.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>
  The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
</dd>

#### Update Row Object(s)

<dd>An array of JSON-formatted objects whose key/value pairs represent the columns and values from your table record. You must include a <code>rowIndex</code> key in each row object to specify which record to update in the spreadsheet. Note that the <code>rowIndex</code> property of your row objects in Appsmith refers to its index in the array of table records, not the record's row number in the Google spreadsheet.</dd>

<dd>

*Example:*

```js
{{
        Table1.updatedRows.map(row => {    // includes rowIndex key in each object
            return row.allFields
        })
 }}
 ```

 See [Update multiple rows](https://docs.appsmithai.com/connect-data/how-to-guides/insert-and-update-data-in-google-sheets#update-multiple-rows) guide.

</dd>


## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](https://docs.appsmithai.com/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.

## See also

- [Fetch and Filter Data from Google Sheets](https://docs.appsmithai.com/connect-data/how-to-guides/filter-data-google-sheet) - Learn how to retrieve and filter data from Google Sheets∂.
- [Insert and Update Data in Google Sheets](https://docs.appsmithai.com/connect-data/how-to-guides/insert-and-update-data-in-google-sheets) - Guide on how to insert new records and update existing data in Google Sheets.
