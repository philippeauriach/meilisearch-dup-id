# Meilisearch duplicate IDs reproduction

This project contains a meilisearch hook, which sends all products to a meilisearch instance at startup.

If you :
- run `yarn develop`
- wait a few seconds that the products are sent to meilisearch 
- start the project again using the same command `yarn develop`

=> the second batch of products will be sent to meilisearch too, and those products will be duplicated, even if they have the same `id`

Products will exist X times in the meilisearch instance, X being the number of time you index them (i.e. by starting the project)