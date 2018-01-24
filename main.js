const Apify = require('apify');
const request = require('request-promise');
const BigQuery = require('@google-cloud/bigquery');

Apify.main(async () => {
    
    // Imports the Google Cloud client library
const BigQuery = require('@google-cloud/bigquery');

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const projectId = "your-project-id";
// const datasetId = "my_dataset";
// const tableId = "my_table";
// const rows = [{name: "Tom", age: 30}, {name: "Jane", age: 32}];

// Creates a client
const bigquery = new BigQuery({
  projectId: projectId,
});

// Inserts data into a table
bigquery
  .dataset(datasetId)
  .table(tableId)
  .insert(rows)
  .then(() => {
    console.log(`Inserted ${rows.length} rows`);
  })
  .catch(err => {
    if (err && err.name === 'PartialFailureError') {
      if (err.errors && err.errors.length > 0) {
        console.log('Insert errors:');
        err.errors.forEach(err => console.error(err));
      }
    } else {
      console.error('ERROR:', err);
    }
  });
    
});
