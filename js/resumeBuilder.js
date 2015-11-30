var name = "Kylie O'Brien-Pratt";

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer | Town Planner | Data Enthusiast";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$('#header').prepend(formattedName);

$('#header').prepend(formattedRole);