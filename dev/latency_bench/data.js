window.BENCHMARK_DATA = {
  "lastUpdate": 1682012563654,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d41a4d942fd9da68d5f6d669653be37b12f12749",
          "message": "Add benchmark for readdir (#213)\n\n* Add benchmark for readdir\r\n\r\nIn this commit, we add a new benchmark script for readdir operation. The\r\nbenchmark itself is pretty simple, we're just doing ls against pre-generated\r\ndirectories with different size. However, comparing the results is a bit\r\ntricky because we're now measuring latency instead of throughput which\r\nis what we do in the existing benchmark.\r\n\r\nOur current CI workflows don't support this scenario, so we have to\r\nintroduce another workflow job just for this kind of benchmark. This new\r\njob will run the latency benchmark script, compare the new result with\r\nthe previous one, and store them at dev/latency_bench path.\r\n\r\nMax number of data points for the chart is also added in this commit to\r\nkeep the chart clean.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Refactor bench script\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update benchmarking doc and add some fio files\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-18T22:09:48-05:00",
          "tree_id": "a408ce70aaa726c3f9c2ab00670f6305a24aae8e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d41a4d942fd9da68d5f6d669653be37b12f12749"
        },
        "date": 1681874262829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.157,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.758,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jb2cool@gmail.com",
            "name": "Jason Bramwell",
            "username": "jb2cool"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70b2b684e949c0966c5d2507f875279ae380a9f9",
          "message": "Adding instructions for building on Debian/Ubuntu (#215)\n\n* Adding instructions for building on Debian/Ubuntu\r\n\r\nAdded in dependencies for Debian/Ubuntu and broke RPM/Deb out into their own lines.\r\n\r\nSigned-off-by: Jason Bramwell <jb2cool@gmail.com>\r\n\r\n* Minor tweaks\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Jason Bramwell <jb2cool@gmail.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-19T03:26:46Z",
          "tree_id": "c4e5f1ee5bf2bcfb9718fdbd1118984fa74da9f4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/70b2b684e949c0966c5d2507f875279ae380a9f9"
        },
        "date": 1681875355814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.218,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.686,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "122115681+eslrahc-swa@users.noreply.github.com",
            "name": "Charles",
            "username": "eslrahc-swa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f3b98086ab5f6b7c7454c50cc96bddeabf9f35f",
          "message": "Add support for AWS profile and unsigned requests as command line arguments (#209)\n\n* Add supports for AWS profile and unsigned requests.\r\n\r\nSupports profile and unsigned requests with the following:\r\n\r\n* Add option --profile for a specific profile in the AWS credentials file #151\r\n* Add support for unsigned requests #181\r\n\r\nThis commit also includes changes that rust defined signing_config owns a\r\ncredentials_provider so it can live as long as signing_conig.\r\n\r\nSigned-off-by: Charles Zhang <zyaoshen@amazon.com>\r\n\r\n* Add header for no-sign-request help\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Charles Zhang <zyaoshen@amazon.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Charles Zhang <zyaoshen@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-20T17:33:22Z",
          "tree_id": "5b43b74f54597b39b9e2710b9a924f110ecc0790",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f3b98086ab5f6b7c7454c50cc96bddeabf9f35f"
        },
        "date": 1682012563160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.039,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}