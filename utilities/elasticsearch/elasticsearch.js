import { Client } from "@elastic/Elasticsearch";
//connect to Elasticsearch
export async function connectToElasticsearch() {
  const ESS_CLOUD_ID = process.env.ESS_CLOUD_ID;
  const ESS_CLOUD_USERNAME = process.env.ESS_CLOUD_USERNAME;
  const ESS_CLOUD_PASSWORD = process.env.ESS_CLOUD_PASSWORD;

  if (!ESS_CLOUD_ID || !ESS_CLOUD_USERNAME || !ESS_CLOUD_PASSWORD) {
    return "ERR_ENV_NOT_DEFINED";
  }

  return new Client({
    auth: {
      username: ESS_CLOUD_USERNAME,
      password: ESS_CLOUD_PASSWORD,
    },
  });
}

export default async function searchES(req, res) {
  try {
    const client = await connectToElasticsearch();
    let results = [];
    const { body } = await client.search({
      index: "rdbms_sync_idx",
      body: {
        query: {
          match: {
            type: "corporate_type",
          },
        },
        _source_excludes: "content", //no need to return the content of the file only need to metadata
      },
    });
    let hits = body.hits.hits;
    hits.forEach((item) => {
      results.push(item._source.meta);
    });
    return res.send(results);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
