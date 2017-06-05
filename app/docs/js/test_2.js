var end = moment();
var duration = moment.duration(end.diff(start));
console.log(duration.asMilliseconds());