# Meilisearch duplicate IDs reproduction

This project contains a meilisearch hook, which sends all products to a meilisearch instance at startup.
The meilisearch instance is the latest available on docker, i.e. 0.22
Meilisearch endpoint is configured in https://github.com/philippeauriach/meilisearch-dup-id/blob/master/hooks/meilisearch/utils.js

If you :
- run `yarn develop`
- wait a few seconds that the products are sent to meilisearch 
- start the project again using the same command `yarn develop`

=> the second batch of products will be sent to meilisearch too, and those products will be duplicated, even if they have the same `id`

Products will exist X times in the meilisearch instance, X being the number of time you index them (i.e. by starting the project)

For example, those two products have the same id :

<img width="699" alt="Capture d’écran 2021-09-22 à 22 42 12" src="https://user-images.githubusercontent.com/920265/134418849-7f5df199-1d6e-4312-8548-152d4513b78e.png">
