# Win Loss Matrix

## Step 1

The first step is to read the data. I've decided to use Node.JS for the built-in support to read JSON files easily.

## Step 2

We want to build the table structure before putting values in, so I do one traversal through the input data to gather the name of the teams. Then, I'll build a mapping of teams to row/column indicies.

## Step 3

Now I'll create the 2D table and fill it with placeholder values. It's a little awkward in Javascript. 2 extra rows and 1 extra column are added for the labels.

## Step 4

Now we can put in the win/loss values, by iterating through each entry from the input data and doing an index lookup from the map defined earlier. In addition, the table labels are populated.

## Step 5

Print the table! Or send it wherever it needs to go