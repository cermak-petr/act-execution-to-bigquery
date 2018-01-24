const Apify = require('apify');
const request = require('request-promise');
const BigQuery = require('@google-cloud/bigquery');

Apify.main(async () => {
    
    // Imports the Google Cloud client library
const BigQuery = require('@google-cloud/bigquery');

const projectId = "test-project-154214";
const datasetId = "my_project_154214";
const tableId = "test-project-154214:my_project_154214.my_new_table";
const rows = [{
    'hashtag': 'test_hashtag',
    'profile_url': 'test_hashtag',
    'instagram_id': 'test_hashtag',	
    'username': 'test_hashtag',
    'name': 'test_hashtag',
    'user_added': 'test_hashtag',
    'bio': 'test_hashtag',
    'posts': 'test_hashtag',
    'following': 'test_hashtag',
    'followers': 'test_hashtag',
    'email': 'test_hashtag',	
    'website_url': 'test_hashtag',
    'referrer': 'test_hashtag'
}];

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
