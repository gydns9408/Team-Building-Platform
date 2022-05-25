import { resolve } from "path";
import elastic from "../../../utilities/elasticsearch/elasticsearch";

const searchES = async (req, res) => {
  const { searchQuery, index, filed, size } = req.body;
  try {
    const client = await elastic();
    let results = [];
    const body = await client.search({
      index: index,
      body: {
        query: {
          match: {
            [filed]: {
              query: searchQuery,
              operator: "and",
              fuzziness: "AUTO",
              prefix_length: "0",
              fuzzy_transpositions: "false",
              minimum_should_match: "85%",
            },
          },
        },
        size: size,
      },
      // _source_excludes: 'content', //no need to return the content of the file only need to metadata
    });

    let hits = body.hits.hits;
    hits.forEach((item) => {
      results.push(item._source);
    });
    return res.send(results);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export default searchES;
