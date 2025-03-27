# 5 principles for writing good prompts

## Give directions
", in style of {person}"
". in style of Steve Jobs"

Do research of famous people for given domain 
Same principles apply to image generation
"{product_type}, {style_details}, designed by {artist}. Product photography, extremly detailed, studio lightning, 3 5 mm dslr"


## Specify format
Structure the response

```text
Brainstorm a list of product names for a {product_description}, in the style of {famous_inventor}.

Return the results as a comma separated list, in this format:
Product description: A shoe that fits any foot size
Product names: [list of 3 product names]

## Examples
{product_examples}"

----------------------------------------

Please rate the product names based on their catchiness, uniqueness, and simplicity. Rate them on a scale from 1-5, with 5 being the highest score. Respond only with a table containing the results.

```

You may also use formats like json here

## Provide examples
Examples have huge impact on the result.
For example if we give example of brand names lika 'iPhone', 'iTable' etc it will return all results with 'i'
Examples will make prompt more realiable but it will reduce the creativity


## Evaluate quality
Identify errors, rate responses, test what drive performance


## Divide labour

Chain multiple prompots 

## Seed words
use seed words you like to influance outpot
i.e
seed words: iPhone, iMac

## test results
test multiuple times same prompt. If it gives diffrent results it is a good indicator it does not know what it is doing

