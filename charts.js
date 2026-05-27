var stackbar = "section 1/monthly rainfall.json";
vegaEmbed('#chart1', stackbar) .then(function(result) {}).catch(console.error);

var stackarea = "section 1/water source.json";
vegaEmbed('#chart2', stackarea). then(function(result){}).catch(console.error);

var radial = "section 3/industry dist.json";
vegaEmbed('#chart3', radial). then(function(result){}).catch(console.error);

var dotplot = "section 2 /use vs cons.json";
vegaEmbed('#chart4', dotplot). then(function(result){}).catch(console.error);

var waterfall1 = "section 2 /agri min manu reuse.json";
vegaEmbed('#chart5', waterfall1). then(function(result){}).catch(console.error);

var waterfall2 = "section 2 /uti house other reuse.json";
vegaEmbed('#chart52', waterfall2). then(function(result){}).catch(console.error);

var housemap = "section 3/household vs restrict level.json";
vegaEmbed('#chart6', housemap). then(function(result){}).catch(console.error);

var parallel = "section 3/stress level.json";
vegaEmbed('#chart7', parallel). then(function(result){}).catch(console.error);

var slope = "section 4/population.json";
vegaEmbed('#chart8', slope). then(function(result){}).catch(console.error);

var storagemap = "section 4/annual rainfall.json";
vegaEmbed('#chart9', storagemap). then(function(result){}).catch(console.error);

var bullet = "section 5/water target.json";
vegaEmbed('#chart10', bullet). then(function(result){}).catch(console.error);