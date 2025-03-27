# tokens
Tokens are basic units for machine learning.
Most models will have limit to number of tokens that can be used. Tokens are very close to words

i.e "poppy is a pretty flower" -> "poppy" "is" "a" "pretty" "flower"

## extending token limit
most llm will have limit of 4k-8k tokens. We can expand those using libs like "tiktoken".
We also can use "chunks" or "summarize" parts of text


# log probablility
we can use log probability to check what word will be next.

# best of
we can use bes of to generate multiple response and pick best of. This increases the cost of using the requests

# temperature
this changes the variance
