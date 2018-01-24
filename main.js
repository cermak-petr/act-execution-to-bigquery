const Apify = require('apify');
const BigQuery = require('@google-cloud/bigquery');

Apify.main(async () => {
    
    // Imports the Google Cloud client library
const BigQuery = require('@google-cloud/bigquery');

const projectId = "test-project-154214";
const datasetId = "my_project_154214";
const tableId = "test-project-154214:my_project_154214.my_new_table";
const rows = [{
    'hashtag': 'test_hashtag',
    'profile_url': 'test_url',
    'instagram_id': 123456,	
    'username': 'test_username',
    'name': 'test_name',
    'user_added': 'test_added',
    'bio': 'test_bio',
    'posts': 1,
    'following': 2,
    'followers': 3,
    'email': 'person@mail.org',	
    'website_url': 'www.person.org',
    'referrer': 'test_referrer'
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
