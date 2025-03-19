const initial_prompt = {
    "model": "gpt-4o-mini",
    "store": true,
    "messages": [
      {"role": "user", "content": "write a haiku about ai"},
    ]
  }

  // Formating responses and giving direction
const formatingPromptResponse = (product_description, famous_inventor, product_examples) => {
  const prompot = `
    Brainstorm a list of product names for a ${product_description}, in the style of ${famous_inventor}.

    Return the results as a comma separated list, in this format:
    Product description: A door to walk thru
    Product names: [list of 3 product names]

    ## Examples
    ${product_examples}

    ----------------------------------------

    Please rate the product names based on their catchiness, uniqueness, and simplicity. Rate them on a scale from 1-5, with 5 being the highest score. Respond only with a table containing the results.
    `;
  console.log('#used prompt: ', prompot)
  return  prompot;
}

export const steveJobsStyleDoors = formatingPromptResponse.bind(null, 'door company', 'Steve Jobs', `
    Produc names: iDoor, iGate, iTunnel, iWay
  `)