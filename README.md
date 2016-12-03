# 501darts

Look up recommended outs for a given number in '01 based dart games.

Display the "outs" (combination of targets to reach zero with the last dart being a double) for a given number.

Motivation for this is that most out charts don't display well on my phone. 

Out charts that are the basis of these recommendations can be found at [3 Dart Outs -- Dartbase](http://www.dartbase.com/outchart1.htm)
and [2 Dart Outs  -- Dartbase](http://www.dartbase.com/outchart2.htm), other good advice, articles about darts, and dart supplies can be found there too.

If you have a suggestion for an out to add to the app, or you just want to thank me for this wonderful bit of coding :) , feel free to send me a message.

If for whatever reason you just wanted to make an API call to get some dart outs, you should construct your GET request here: https://five-oh-one.herokuapp.com/api/key(your_number_without_the_parentheses) 

To install a local version:
 ## Clone this repo & cd into the newly created directory

 + `git clone git@github.com:waltdakind/501darts.git && cd 501darts`

 ## Download deoendencies with node package manager

 + `npm install`

 ## Start the server

 + `node server.js`   (`npm start` will work too)



